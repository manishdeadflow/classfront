import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import StudentList from "../StudentList";
import Navbar from "../Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "../Student.css";

const Student = function (props) {
  const [page, setPage] = useState(true);
  const [students, setStudents] = useState([]);
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const modalRef = useRef();

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("Authorization")}`;

  const getStudents = async function () {
    try {
      const student = await axios.get("http://localhost:3001/parent/students");
      setStudents(student.data);
    } catch (e) {
      console.log(e);
    }
  };

  const addClassHandler = () => {
    modalRef.current.classList.remove("hidden");
  };

  const classIdSubmitHandler = async () => {
    modalRef.current.classList.add("hidden");
    const newCourse = await axios.patch(
      "http://localhost:3001/parent/addStudent",
      { email: email }
    );
    setEmail("");
    getStudents();
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    getStudents();
  }, []);

  if (page) {
    return (
      <div>
        <Navbar />
        <StudentList students={students} />
        <button className="btn btn-outline-dark" onClick={addClassHandler}>
          Add Student
        </button>
        <div className="class-modal hidden" ref={modalRef}>
          <div className="class-modal-form">
            <div>
              <label className="label">Email</label>
              <input
                onChange={emailHandler}
                placeholder="Email"
                className="input form-control"
                value={email}
                type="email"
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
