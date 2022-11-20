import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CourseList from './CourseList'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './Teacher.css'

const Teacher = function (props) {

    const [page, setPage] = useState(true)
    const [courses, setCourses] = useState([])
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const modalRef = useRef()

    // axios.defaults.headers.common['Authorization'] = `Bearer ${props.token}`;
    const config = {
        headers: {
            Authorization: props.token
        }
    };

    const getCourses = async function () {
        try {
            const course = await axios.get('http://localhost:3001/teacher/courses', config)
            setCourses(course.data)
        } catch (e) {
            console.log(e)
        }
    }

    const addClassHandler = () => {
        modalRef.current.classList.remove('hidden')
    }

    const classSubmitHandler = async () => {
        modalRef.current.classList.add('hidden')
        const newCourse= await axios.post('http://localhost:3001/teacher/createCourse',{name:name,description:description},config)
        setName('');
        setDescription('')
        getCourses();
    }

    const handleName = (e) => {
        setName(e.target.value);
    };

    // Handling the email change
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    useEffect(() => {
        getCourses();
    }, [])

    if (page) {
        return (
            <div>
                <CourseList courses={courses} />
                <button className='btn btn-outline-dark' onClick={addClassHandler}>Add Course</button>
                <div className='class-modal hidden' ref={modalRef}>
                    <div className='class-modal-form'>
                        <div >
                            <label className="label">Name</label>
                            <input onChange={handleName} placeholder="name" className="input form-control"
                                value={name} type="text" />

                        </div>
                        <div>
                            <label className="label">Description</label>
                            <textarea onChange={handleDescription} placeholder="description" className="input form-control"
                                value={description} type="text" />

                        </div>
                        <div>
                            <button onClick={classSubmitHandler} className="btn btn-outline-dark">Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Teacher
