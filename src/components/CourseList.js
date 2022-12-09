import React, { useState, useEffect } from 'react';
import './CourseList.css'
import { useNavigate } from 'react-router-dom';

const CourseList = function (props) {

  const navigate = useNavigate();

  const clickHandler = function (id) {
    localStorage.setItem('course-t', id)
    navigate('course')
  }


  return (
    <div className="course-list">{props.courses.map((course) => (
      <div className='course-item' onClick={() => { clickHandler(course._id) }} key={course._id}>
        <h1>{course.name}</h1>
        <p>description</p>
      </div>
    ))}
    </div>
  )
}

export default CourseList
