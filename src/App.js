import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Parent from "./components/parent/Parent"
import Student from "./components/student/Student"
import Teacher from "./components/teacher/Teacher"
import CourseT from "./components/parent/Course"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/parent" element={<Parent />}/>
      <Route path="/teacher" element={<Teacher />}/>
      <Route path="/teacher/course" element={<CourseT />} />
      <Route path="/student" element={<Student />}/>
    </Routes>
    </div>
  );
}

export default App;
