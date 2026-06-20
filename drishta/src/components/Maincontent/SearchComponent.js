// SearchComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
const SearchComponent = ({ onSearch, onSuggestionClick,latitude,longitude }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setmessage] = useState("");
  const [low,setLow] = useState("");
  const [high,setHigh] = useState("");
  const [moderate,setModerate] = useState("");
  function handlepredict() {
    axios.post("http://localhost:8000/backend/flood/", {
      latitude: latitude,
      longitude: longitude
    }).then((res) => {
      const msg=`Chances for flood: \n `;
      setLow(`Low: ${res.data.Low}%`);
      setModerate(`Moderate: ${res.data.Moderate}%`);
      setHigh(`High: ${res.data.High}%`);
      setmessage(msg);
      console.log(res.data.Low) ;
    });

  }

  const handleSearchChange = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${e.target.value}&format=json&limit=5`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.display_name);
    onSuggestionClick(suggestion);
    setSuggestions([]);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    //location
    <div className="bg-white p-4 rounded shadow-sm">
      <h2 className="h5 font-weight-bold mb-2 border-bottom border-primary d-inline-block">
        Location
      </h2>
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text bg-white border-right-0"></span>
        </div>
        <input
          className="form-control border-left-0"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a place"
          style={{ marginTop: "10px" }}
        />
        <button onClick={handleSearch} style={{ marginTop: "5px" }}>
          Search
        </button>
        {/* suggestion list */}
        {isLoading && <div>Loading suggestions...</div>}

        {suggestions.length > 0 && (
          <ul
            className="suggestions"
            style={{
              marginTop: "5px",
              border: "1px solid gray",
              listStyleType: "none",
              padding: "0",
              backgroundColor: "white",
            }}
          >
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                onClick={() => handleSuggestionClick(suggestion)}
                style={{ padding: "5px", cursor: "pointer" }}
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
        <div className="input-group-append"></div>
      </div>
      {/* Predict */}

      <button className="btn btn-primary mb-4" onClick={handlepredict}>
        Predict
      </button>
      <div>{message}</div>
      <div>{low}</div>
      <div>{moderate}</div>
      <div>{high}</div>

      <hr />
    </div>
  );
};

export default SearchComponent;
