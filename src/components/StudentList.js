import React, { useState, useEffect } from 'react';
import './CourseList.css'
import { useNavigate } from 'react-router-dom';

const StudentList = function (props) {
    const navigate = useNavigate()
    const clickHandler = function (id) {
      localStorage.setItem('student-p', id)
      navigate('student')
    }

    return(
        <div className="course-list">{props.students.map((data) => (
          <div className='course-item' onClick={()=>{clickHandler(data._id)}} key={data._id}>
                <h1>{data.name}</h1> 
                </div>
          ))}
        </div>
    )
}

export default StudentList
