import Navbar from "../Navbar";
import "./Course.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Course = function () {
  const [notes, setNotes] = useState([]);
  const [assigments, setAssigments] = useState([]);
  const [students, setStudents] = useState([]);

  const [noteName, setNoteName] = useState([]);
  const [noteLink, setNoteLink] = useState([]);
  const [assigmentName, setAssigmentName] = useState([]);
  const [assigmentLink, setassigmentLink] = useState([]);
  const notesRef = useRef();
  const assigmentsRef = useRef();

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

  const addNotesHandler = () => {
    notesRef.current.classList.remove("hidden");
  };

  const handleNoteName = (e) => {
    setNoteName(e.target.value);
  };

  const handleNoteLink = (e) => {
    setNoteLink(e.target.value);
  };

  const noteSubmitHandler = async () => {
    notesRef.current.classList.add("hidden");
    await axios.patch("http://localhost:3001/teacher/course/addNotes", {
      note: noteName,
      link: noteLink,
      courseId: localStorage.getItem("course-t"),
    });
    setNoteName("");
    setNoteLink("");
    setValues();
  };

  const addAssigmentHandler = () => {
    assigmentsRef.current.classList.remove("hidden");
  };

  const handleAssigmentName = (e) => {
    setAssigmentName(e.target.value);
  };

  const handleAssigmentLink = (e) => {
    setassigmentLink(e.target.value);
  };

  const assigmentSubmitHandler = async () => {
    assigmentsRef.current.classList.add("hidden");
    await axios.post("http://localhost:3001/teacher/course/addAssigment", {
      name: assigmentName,
      link: assigmentLink,
      courseId: localStorage.getItem("course-t"),
    });
    setAssigmentName("");
    setassigmentLink("");
    setValues();
  };

  return (
    <div>
      <Navbar />
      <div className="course-container">
        <div className="student-box">
          <div className="put-adjacent">
            <h2>Students</h2>
            <button className="btn btn-primary"> &gt; </button>
          </div>
          <div className="student-list list-group">
            {students.length !== 0 &&
              students.map((value) => (
                <div
                  className="student-list-item list-group-item"
                  key={value.student._id}
                >
                  {value.student.name}
                </div>
              ))}
          </div>
        </div>
        <div className="notes-box">
          <div className="put-adjacent">
            <h2>Notes</h2>
            <button onClick={addNotesHandler} className="btn btn-outline-dark">
              {" "}
              +{" "}
            </button>
          </div>
          <div className="notes-list">
            {notes.length !== 0 &&
              notes.map((value) => (
                <div className="notes-list-item" key={value.notes._id}>{value.notes.name}</div>
              ))}
          </div>
        </div>
        <div className="assigment-box">
          <div className="put-adjacent">
            <h2>Assigments</h2>
            <button onClick={addAssigmentHandler} className="btn btn-outline-dark"> + </button>
          </div>
          <div className="assigment-list">
            {assigments.length !== 0 &&
              assigments.map((value) => <div className="assign-list-item" key={value._id}>{value.name}</div>)}
          </div>
        </div>
      </div>

      <div className="class-modal hidden" ref={notesRef}>
        <div className="class-modal-form">
          <h1>Add Note</h1>
          <div>
            <label className="label">Name</label>
            <input
              onChange={handleNoteName}
              placeholder="name"
              className="input form-control"
              value={noteName}
              type="text"
            />
          </div>
          <div>
            <label className="label">Link</label>
            <input
              onChange={handleNoteLink}
              placeholder="link"
              className="input form-control"
              value={noteLink}
              type="text"
            />
          </div>
          <div>
            <button
              onClick={noteSubmitHandler}
              className="btn btn-outline-dark"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="class-modal hidden" ref={assigmentsRef}>
        <div className="class-modal-form">
          <h1>Add Assigments</h1>
          <div>
            <label className="label">Name</label>
            <input
              onChange={handleAssigmentName}
              placeholder="name"
              className="input form-control"
              value={assigmentName}
              type="text"
            />
          </div>
          <div>
            <label className="label">Link</label>
            <input
              onChange={handleAssigmentLink}
              placeholder="link"
              className="input form-control"
              value={assigmentLink}
              type="text"
            />
          </div>
          <div>
            <button
              onClick={assigmentSubmitHandler}
              className="btn btn-outline-dark"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
