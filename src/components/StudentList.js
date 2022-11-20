import React, { useState, useEffect } from 'react';
import './CourseList.css'

const StudentList = function (props) {

    const clickHandler = function (e) {

    }

    return(
        <div className="course-list">{props.students.map((data) => (
            <div className='course-item' onClick={clickHandler} key={data._id}>
                <h1>{data.name}</h1> 
                </div>
          ))}
        </div>
    )
}

export default StudentList