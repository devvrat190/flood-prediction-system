# Drishta: Flood Prediction System
Video demo of drishta: [demo](https://drive.google.com/file/d/1stnMucFT-WqV3vMjbx2gEOEn0DQpQ26R/view)
## Overview
Drishta is a flood prediction system developed by **Team Syntax Syncers**. It leverages past rainfall data, river discharge rates, temperature, and other climatic factors to predict flood risks. 

## How It Works
1. **Location Selection**: Users can select any location on an interactive map.
2. **Data Fetching**: The latitude and longitude of the selected location are sent to the backend, where past data is retrieved using the **NASA LARC API**.
3. **River Data Integration**: The nearest river discharge data is fetched using the **Open-Meteo API**.
4. **Forecasting**: We use the **Prophet model** to predict future rainfall and river discharge rates.
5. **Flood Risk Assessment**:
   - Thresholds are defined based on forecasted values.
   - The flood risk is categorized into three levels:
     - **Low**: No flood risk.
     - **Moderate**: Uncertain risk.
     - **High**: Significant flood risk.

## Detailed Workflow
1. **User Interaction**:
   - Users interact with the web application to select a location on the map.
   - The latitude and longitude of the selected point are sent to the backend.

2. **Data Retrieval**:
   - The backend fetches historical climate data for the selected location from the **NASA LARC API**.
   - Concurrently, it retrieves real-time and past river discharge rates from the **Open-Meteo API**.

3. **Data Processing**:
   - The collected data is cleaned and formatted for analysis.
   - Missing values are handled appropriately to ensure model accuracy.

4. **Forecasting with Prophet**:
   - The **Prophet model** is used to predict future rainfall and river discharge rates.
   - The model analyzes trends and seasonal patterns to provide reliable predictions.

5. **Flood Risk Evaluation**:
   - Based on forecasted values, predefined thresholds determine the likelihood of a flood.
   - The system categorizes the flood risk into three levels (Low, Moderate, High).
   - This classification helps authorities and users take appropriate precautions.

6. **Future Enhancements**:
   - We plan to integrate **LLMs (Large Language Models) and Generative AI** to provide **real-time suggestions** on what actions should be taken in case of a flood.
   - Additional data sources will be explored to improve prediction accuracy.

## Tech Stack
- **Backend**: Django
- **Frontend**: React.js
- **Forecasting Model**: Prophet
- **APIs Used**:
  - NASA LARC API (for past climate data)
  - Open-Meteo API (for river discharge data)

## Usage
To set up and run Drishta:
1. Clone the repository.
2. Install dependencies for Django and React.
3. Run the backend and frontend servers.
4. Interact with the map to predict flood risks.

## License
This project is open-source and available for use and modification.

---
Drishta - Predicting floods before they happen! 🌊

