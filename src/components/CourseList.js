import React, { useState, useEffect } from 'react';
import './CourseList.css'

const CourseList = function (props) {

    const clickHandler = function (e) {

    }

    return(
        <div className="course-list">{props.courses.map((course) => (
            <div className='course-item' onClick={clickHandler} key={course._id}>
                <h1>{course.name}</h1>
                <p>description goes here...</p>
                </div>
          ))}
        </div>
    )
}

export default CourseList