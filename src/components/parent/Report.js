import axios from "axios";
import { useState, useEffect } from "react";
import "./Report.css";
import Navbar from "../Navbar";

const Report = function () {
  return (
    <>
      <Navbar />
      <div className="report">
        <div className="heading">
          <h1>Report</h1>
        </div>
        <div className="subheadings">
          <div>
            <h3>Assigment</h3>
          </div>
          <div>
            <h3>Solved Assigment</h3>
          </div>
          <div>
            <h3>Marks</h3>
          </div>
          <div>
            <h3>Remarks</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
