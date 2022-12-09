import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-black.png";
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Home = function () {
  return (
    <>
      <div className="home">
        <div className="home-nav">
          <img className="home-logo" src={logo} alt="Logo" />
          <div className="home-btn-div">
            <Link to="/login">
              <button className="btn btn-outline-dark">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outline-dark">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="home-welcome">
          Welcome to <br /> <span>ClassLog</span>
        </div>
      </div>
    </>
  );
};

export default Home;
