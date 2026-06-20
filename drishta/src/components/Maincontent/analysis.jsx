import React from "react";

function Analysis() {
  return (
    <>
      {" "}
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="h5 font-weight-bold mb-2 border-bottom border-primary d-inline-block">
          Analyse
        </h2>
        <div className="border p-4 rounded mb-2">
          <h3 className="font-weight-bold">Past Trend News</h3>
          <p>text from internet and fetching data</p>
        </div>
        <hr />
        <div className="border p-4 rounded mb-2">
          <h3 className="font-weight-bold">Graphs</h3>
          <p>precipitation graph</p>
          <div class="col-md-6 map">
            <img
              src="https://placehold.co/800x600"
              className="img-fluid"
              alt="Map showing the location of Lucknow and surrounding areas"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Analysis;
