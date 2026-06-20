import React from "react";
// import "./login.css";

export const Login = () => {
  return (
    <div className="front-page">
      <div className="div">
        <div className="navbar">
          <div className="overlap-group">
            <div className="overlap">
              <div className="rectangle" />

              <div className="text-wrapper">Home</div>
            </div>

            <div className="overlap-2">
              <div className="rectangle-2" />

              <div className="rectangle-3" />

              <div className="text-wrapper-2">Login</div>

              <div className="text-wrapper-3">Signup</div>
            </div>

            <div className="text-wrapper-4">Dashboard</div>

            <div className="overlap-3">
              <div className="text-wrapper-5">About us</div>

              <div className="text-wrapper-6">Contact us</div>
            </div>

            <img
              className="screenshot"
              alt="Screenshot"
              src="https://c.animaapp.com/SPUprSQz/img/screenshot-2025-01-31-003210-1@2x.png"
            />
          </div>
        </div>

        <div className="overlap-4">
          <img
            className="img"
            alt="Screenshot"
            src="https://c.animaapp.com/SPUprSQz/img/screenshot-2025-01-31-003210-removebg-preview--1--1@2x.png"
          />

          <div className="overlap-5">
            <div className="text-wrapper-7">Section</div>

            <div className="text-wrapper-8">Home</div>

            <div className="text-wrapper-9">Contact</div>

            <div className="text-wrapper-10">Social</div>
          </div>
        </div>

        <div className="overlap-6">
          <img
            className="logo-removebg"
            alt="Logo removebg"
            src="https://c.animaapp.com/SPUprSQz/img/logo-removebg-preview-1@2x.png"
          />

          <p className="p">Sign in to your account</p>

          <div className="text-wrapper-11">Email address</div>

          <div className="text-wrapper-12">Password</div>

          <input className="rectangle-4" />

          <input className="rectangle-5" />

          <div className="div-wrapper">
            <a href="/front">
            <div className="text-wrapper-13">Sign in</div>
            </a>
          </div>

          <div className="overlap-7">
            <div className="text-wrapper-14">Or continue with</div>

            <img
              className="line"
              alt="Line"
              src="https://c.animaapp.com/SPUprSQz/img/line-3.svg"
            />
          </div>

          <img
            className="line-2"
            alt="Line"
            src="https://c.animaapp.com/SPUprSQz/img/line-3.svg"
          />

          <div className="overlap-8">
            <div className="text-wrapper-15">Google</div>
          </div>

          <div className="overlap-9">
            <div className="rectangle-6" />

            <div className="text-wrapper-16">Facebook</div>

            <img
              className="facebook"
              alt="Facebook"
              src="https://c.animaapp.com/SPUprSQz/img/facebook@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
