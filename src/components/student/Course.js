import Navbar from "../Navbar";
import "./Course.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Course = function () {
  const [notes, setNotes] = useState([]);
  const [assigments, setAssigments] = useState([]);
  const [students, setStudents] = useState([]);

  const setValues = async () => {
    try {
      const data = await axios.get(
        `http://localhost:3001/courseData/${localStorage.getItem("course-t")}`
      );
      setNotes(data.data.course.notes);
      setAssigments(data.data.assigments);
      setStudents(data.data.students);
    } catch (e) { }
  };

  useEffect(() => {
    setValues();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="course-container">
        <div className="student-box">
          <div className="put-adjacent">
            <h2>Students</h2>
          </div>
          <div className="student-list list-group">
            {students.length !== 0 &&
              students.map((value) => (
                <div
                  className="student-list-item list-group-item"
                  id={value.student._id}
                >
                  {value.student.name}
                </div>
              ))}
          </div>
        </div>
        <div className="notes-box">
          <div className="put-adjacent">
            <h2>Notes</h2>
          </div>
          <div className="notes-list">
            {notes.length !== 0 &&
              notes.map((value) => (
                <div className="notes-list-item" id={value.notes._id}>{value.notes.name}</div>
              ))}
          </div>
        </div>
        <div className="assigment-box">
          <div className="put-adjacent">
            <h2>Assigments</h2>
          </div>
          <div className="assigment-list">
            {assigments.length !== 0 &&
              assigments.map((value) => <div className="assign-list-item" id={value._id}>{value.name}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
