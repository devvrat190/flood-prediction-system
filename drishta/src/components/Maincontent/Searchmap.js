import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import m from "./marker.png"
import L from "leaflet"; // Import Leaflet for custom icons

import "leaflet/dist/leaflet.css";
import SearchComponent from "./SearchComponent";
import Prediction from "./prediction";
import Analysis from "./analysis";
import Suggestion from "./suggestion";


const customIcon = L.icon({
  iconUrl: m, // Replace with your image path
  iconSize: [40, 40], // Adjust the size of the icon
  iconAnchor: [20, 40], // Positioning of the icon
  popupAnchor: [0, -40], // Popup position
});
const MapMover = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (map && position) {
      map.flyTo(position, 13, { duration: 2 });
    }
  }, [position, map]);

  return null;
};

const SearchMap = ({ visibleDiv }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [position, setPosition] = useState([28.644800,77.216721]);

  const mapRef = useRef(null);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const newPos = [parseFloat(lat), parseFloat(lon)];
        setPosition(newPos);
        setSearchTerm(data[0].display_name); // Set the search term after successful search
      } else {
        alert("No results found for the search term.");
      }
    } catch (error) {
      alert("Error fetching data. Please try again.");
      console.error(error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.display_name);
    setPosition([parseFloat(suggestion.lat), parseFloat(suggestion.lon)]);
  };

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
    reverseGeocode(lat, lng);
  };

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      if (data.display_name) {
        setSearchTerm(data.display_name);
      } else {
        setSearchTerm(`Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`);
      }
    } catch (error) {
      console.error("Error reverse geocoding:", error);
      setSearchTerm(`Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`);
    }
  };

  const MapClickHandler = () => {
    const map = useMap();
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  };

  return (
    //Location,Prediction,{for search and showing}
    <div className="w-100 h-100">
      <div className="p-4" style={{ width: "50%" }}>
        {visibleDiv === 1 && (
          <SearchComponent
            onSearch={handleSearch}
            onSuggestionClick={handleSuggestionClick}
            latitude={position[0]}
            longitude={position[1]}
          />
        )}
        {visibleDiv === 2 && <Prediction />}
        {visibleDiv === 3 && <Analysis />}
        {visibleDiv === 4 && <Suggestion />}
      </div>
  
      <div>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "auto" }}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>{searchTerm}</Popup>
          </Marker>
          <MapMover position={position} />
          <MapClickHandler />
        </MapContainer>
      </div>
    </div>
  );
};

export default SearchMap;
