import React from "react";
function Location() {
  return (
    <>
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="h5 font-weight-bold mb-2 border-bottom border-primary d-inline-block">
          Location
        </h2>
        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <span className="input-group-text bg-white border-right-0">
              <i className="fas fa-map-marker-alt text-black"></i>
            </span>
          </div>
          <input
            className="form-control border-left-0"
            type="text"
            value="Allahabad, Uttar Pradesh"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <button className="btn btn-primary mb-4">Predict</button>
        <hr />
      </div>
    </>
  );
}
export default Location;
