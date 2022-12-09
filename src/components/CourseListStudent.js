import React, { useState, useEffect } from "react";
import "./CourseList.css";
import { useNavigate } from "react-router-dom";

const CourseListStudent = function (props) {
  const navigate = useNavigate();
  const clickHandler = function (id) {
    localStorage.setItem("course-t", id);
    navigate("course");
  };

  return (
    <div className="course-list">
      {props.courses.map((data) => (
        <div
          className="course-item"
          onClick={()=>{clickHandler(data.course._id)}}
          key={data.course._id}
        >
          <h1>{data.course.name}</h1>
          <p>{data.course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseListStudent;

