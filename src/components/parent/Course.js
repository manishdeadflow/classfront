import Navbar from "../Navbar";
import "./Course.css";

const Course = function () {
  return (
    <div>
      <Navbar />
      <div className="course-container">
        <div className="student-box">
          <div className="put-adjacent">
            <h2>Students</h2>

            <button className="btn btn-outline-dark">Share</button>
          </div>
        </div>
        <div className="notes-box">
          <div className="put-adjacent">
            <h2>Notes</h2>
            <button className="btn btn-outline-dark">Add Note</button>
          </div>
        </div>
        <div className="assigment-box">
          <div className="put-adjacent">
            <h2>Assigments</h2>
            <button className="btn btn-outline-dark">Add Assigment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
