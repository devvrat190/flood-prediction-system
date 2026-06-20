import React from "react";
function Prediction() {
  return (
    <>
      {" "}
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="h5 font-weight-bold mb-2 border-bottom border-primary d-inline-block">
          Prediction
        </h2>
        <div className="border p-4 rounded mb-2">
          <h3 className="font-weight-bold">Flood</h3>
          <p>No, there will be no flood and some text</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-weight-bold">Drought</h3>
          <p>No, there will be no flood and some text</p>
        </div>
      </div>
    </>
  );
}
export default Prediction;
