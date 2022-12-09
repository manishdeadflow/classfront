import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CourseListStudent from "../CourseListStudent";
import Navbar from "../Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "../Student.css";

const Student = function (props) {
  const [page, setPage] = useState(true);
  const [courses, setCourses] = useState([]);
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const modalRef = useRef();

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("Authorization")}`;

  const getCourses = async function () {
    try {
      const course = await axios.get("http://localhost:3001/student/courses");
      console.log(course.data);
      setCourses(course.data);
    } catch (e) {
      console.log(e);
    }
  };

  const addClassHandler = () => {
    modalRef.current.classList.remove("hidden");
  };

  const classIdSubmitHandler = async () => {
    modalRef.current.classList.add("hidden");
    const newCourse = await axios.post(
      "http://localhost:3001/student/joinClass",
      { id: id }
    );
    setId("");
    getCourses();
  };

  const handleCourseId = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    getCourses();
  }, []);

  if (page) {
    return (
      <div>
        <Navbar />
        <CourseListStudent courses={courses} />
        <button className="btn btn-outline-dark" onClick={addClassHandler}>
          Join Class
        </button>
        <div className="class-modal hidden" ref={modalRef}>
          <div className="class-modal-form">
            <div>
              <label className="label">Course Id</label>
              <input
                onChange={handleCourseId}
                placeholder="id"
                className="input form-control"
                value={id}
                type="text"
              />
            </div>
            <div>
              <button
                onClick={classIdSubmitHandler}
                className="btn btn-outline-dark"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Student;
