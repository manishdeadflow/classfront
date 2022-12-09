import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import CourseList from "./CourseList";

const StudentCourses = function () {
  const [course, setCourse] = useState([]);

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("Authorization")}`;

  const setValues = async function () {
    try {
      const data = await axios.get(
        `http://localhost:3001/parent/student/${localStorage.getItem(
          "student-p"
        )}`
      );
      const courseData = data.data.map((ob) => ob.course )
      setCourse(courseData)
      setValues()
    } catch (e) {}
  };

  useEffect(() => {
    setValues();
  }, []);

  return <div>
    <Navbar />
    <CourseList courses={course} />
    </div>;
};

export default StudentCourses;
