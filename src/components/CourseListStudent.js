import React, { useState, useEffect } from 'react';
import './CourseList.css'

const CourseListStudent = function (props) {

    const clickHandler = function (e) {

    }

    return(
        <div className="course-list">{props.courses.map((data) => (
            <div className='course-item' onClick={clickHandler} key={data.course._id}>
                <h1>{data.course.name}</h1> 
                <p>{data.course.description}</p>
                </div>
          ))}
        </div>
    )
}

export default CourseListStudent