import imdlib as imd
import pandas as pd
import datetime
import requests
import matplotlib.pyplot as plt
from prophet import Prophet
import openmeteo_requests

import requests_cache
import pandas as pd
from retry_requests import retry
def get_weather_data(latitude, longitude):
    url = f"https://power.larc.nasa.gov/api/temporal/daily/point?parameters=PRECTOTCORR&community=RE&longitude={longitude}&latitude={latitude}&start=20250101&end=20250205&format=JSON"

    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        weather_data = data["properties"]["parameter"]["PRECTOTCORR"]  # Extract rainfall data

        # Convert Dictionary to DataFrame
        df = pd.DataFrame(weather_data.items(), columns=["ds", "y"])

        # Convert 'ds' to Date Format
        df["ds"] = pd.to_datetime(df["ds"], format='%Y%m%d')

        return df
    else:
        print(f"Error {response.status_code}: {response.text}")
        return None
    

def get_river_data(latitude, longitude):
    # Setup the Open-Meteo API client with cache and retry on error
    cache_session = requests_cache.CachedSession('.cache', expire_after = 3600)
    retry_session = retry(cache_session, retries = 5, backoff_factor = 0.2)
    openmeteo = openmeteo_requests.Client(session = retry_session)

    # Make sure all required weather variables are listed here
    # The order of variables in hourly or daily is important to assign them correctly below
    url = "https://flood-api.open-meteo.com/v1/flood"
    params = {
        "latitude": latitude,
        "longitude": longitude,
        "daily": "river_discharge",
        "timezone": "UTC"
    }
    responses = openmeteo.weather_api(url, params=params)

    # Process first location. Add a for-loop for multiple locations or weather models
    response = responses[0]


    # Process daily data. The order of variables needs to be the same as requested.
    daily = response.Daily()
    daily_river_discharge = daily.Variables(0).ValuesAsNumpy()

    daily_data = {"ds": pd.date_range(
        start = pd.to_datetime(daily.Time(), unit = "s", utc = True),
        end = pd.to_datetime(daily.TimeEnd(), unit = "s", utc = True),
        freq = pd.Timedelta(seconds = daily.Interval()),
        inclusive = "left"
    )}


    daily_data["y"] = daily_river_discharge

    daily_dataframe = pd.DataFrame(data = daily_data)
    daily_dataframe["ds"] = daily_dataframe["ds"].dt.tz_localize(None)

    return daily_dataframe


def model_train_rainfall(latitude,longitude):
    model = Prophet()
    model.fit(get_weather_data(latitude,longitude))
    future=model.make_future_dataframe(periods=365)
    forecast = model.predict(future)
    forecast = forecast[["ds", "yhat"]].rename(columns={"yhat": "y_rainfall"})
    return forecast


def model_train_discharge(latitude,longitude):
    model = Prophet()
    model.fit(get_river_data(latitude,longitude))
    future=model.make_future_dataframe(periods=365)
    forecast = model.predict(future)
    forecast = forecast[["ds", "yhat"]].rename(columns={"yhat": "y_discharge"})
    return forecast


def flood_risk(forecast_rainfall,forecast_discharge):
    rainfall_threshold = 50    # mm/day (heavy rain)
    discharge_threshold = 7.5  # m³/s   (flood risk)

    df_combined = pd.merge(forecast_rainfall, forecast_discharge, on="ds", suffixes=("_rainfall", "_discharge"))
 
    df_combined["Flood_Risk"] = "Low"

    df_combined.loc[
        (df_combined["y_rainfall"] > rainfall_threshold) & (df_combined["y_discharge"] > discharge_threshold),
        "Flood_Risk"
    ] = "High"

    df_combined.loc[
        ((df_combined["y_rainfall"] > rainfall_threshold) & (df_combined["y_discharge"] <= discharge_threshold)) |
        ((df_combined["y_rainfall"] <= rainfall_threshold) & (df_combined["y_discharge"] > discharge_threshold)),
        "Flood_Risk"
    ] = "Moderate"

    return df_combined


