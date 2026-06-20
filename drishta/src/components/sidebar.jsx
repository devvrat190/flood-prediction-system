import React from "react";
import { useState } from "react";

import SearchMap from "./Maincontent/Searchmap";
function Sidebar() {
  const [visibleDiv, setVisibleDiv] = useState(null);

  const handleButtonClick = (divNumber) => {
    setVisibleDiv(divNumber);
  };
  return (
    <>
      <div class="d-flex">
        <div className="bg-light p-4" style={{ width: "25%", height: "100vh" }}>
          <h1 className="h4 font-weight-bold mb-4">DASHBOARD</h1>
          <ul className="list-unstyled">
            <li className="mb-2">
              <button onClick={() => handleButtonClick(1)}>Location</button>
            </li>
            <li className="mb-2">
              <button onClick={() => handleButtonClick(2)}>Prediction</button>
            </li>
            <li className="mb-2">
              <button onClick={() => handleButtonClick(3)}>Analysis</button>
            </li>
            <li className="mb-2">
              <button onClick={() => handleButtonClick(4)}>Suggestion</button>
            </li>
          </ul>
        </div>
        <div class="flex-fill d-flex">
          <SearchMap visibleDiv={visibleDiv} />
        </div>
      </div>
    </>
  );
}
export default Sidebar;
