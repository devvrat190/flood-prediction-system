import React from "react";
import "./style.css";
import img from "./img.png";
 const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />

          <div className="rectangle-2" />

          <div className="rectangle-3" />

          <div className="text-wrapper">Features</div>

          <img
            className="line"
            alt="Line"
            src="https://c.animaapp.com/3XMbCI0n/img/line-1.svg"
          />

          <div className="rectangle-4" />

          <div className="rectangle-4" />

          <div className="rectangle-5" />

          <div className="rectangle-6" />

          <div className="text-wrapper-2">Cost-Effective</div>

          <div className="text-wrapper-2">Cost-Effective</div>

          <div className="text-wrapper-3">Cost-Effective</div>

          <div className="text-wrapper-4">Cost-Effective</div>

          <p className="p">
            Implementing AI-based prediction systems can be more cost-effective
            than traditional methods, as they reduce the need for extensive
            manual data collection and analysis
          </p>

          <p className="p">
            Implementing AI-based prediction systems can be more cost-effective
            than traditional methods, as they reduce the need for extensive
            manual data collection and analysis
          </p>

          <p className="text-wrapper-5">
            Implementing AI-based prediction systems can be more cost-effective
            than traditional methods, as they reduce the need for extensive
            manual data collection and analysis
          </p>

          <p className="text-wrapper-6">
            Implementing AI-based prediction systems can be more cost-effective
            than traditional methods, as they reduce the need for extensive
            manual data collection and analysis
          </p>

          <img
            className="gemini-generated"
            alt="Geminigenerated"
            src={img}
          />

          <p className="flood-drought">
            Flood &amp; Drought Prediction System Powered by AI
          </p>

          <p className="by-providing-early">
            <span className="span">
              By providing early warnings, we enable timely evacuations, protect
              critical infrastructure, and optimize water resource
              management.&nbsp;&nbsp;Farmers can make informed decisions about
              planting and irrigation, while emergency responders can deploy
              resources more effectively
            </span>

            <span className="text-wrapper-7">.</span>
          </p>

          <div className="rectangle-7" />
          <a href="/main">
          <div className="text-wrapper-8">MAKE PREDICTION</div>
          </a>
        </div>

        <div className="navbar">
          <div className="overlap-group">
            <div className="overlap-2">
              <div className="rectangle-8" />

              <div className="text-wrapper-9">Home</div>
            </div>

            <div className="overlap-3">
              <div className="rectangle-9" />

              <div className="rectangle-10" />

              <div className="text-wrapper-10">Login</div>

              <div className="text-wrapper-11">Signup</div>
            </div>

            <div className="text-wrapper-12">Dashboard</div>

            <div className="overlap-4">
              <div className="text-wrapper-13">About us</div>

              <div className="text-wrapper-14">Contact us</div>
            </div>

            <img
              className="screenshot"
              alt="Screenshot"
              src="https://c.animaapp.com/3XMbCI0n/img/screenshot-2025-01-31-003210-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;