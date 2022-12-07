import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link , useNavigate} from "react-router-dom";
import "./Login.css";
import left from "../images/left.jpg";

export default function Form(props) {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("teacher");
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleRole = (e) => {
    console.log(e.target.value);
    setRole(e.target.value);
    setSubmitted(false);
  };
  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@") || password.trim().length < 8) {
      setError(true);
    } else {
      try {
        const data = { email: email, password: password, role: role };
        const user = await axios.post("http://localhost:3001/userLogin", data);
        localStorage.setItem("Authorization", user.data.token);
        setEmail("");
        setPassword("");
        setRole("teacher");
        setSubmitted(true);
        setError(false);
        navigate(`/${role}`)
      } catch (e) {
        setError(true);
        console.log(e);
      }
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h3>User successfully registered!!</h3>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h3>Please enter all the fields</h3>
      </div>
    );
  };

  return (
    <div className="login-container">
      <div>
        <img className="left-img" src={left} />
      </div>
      <div className="login-form">
        <div>
          <h1>LOGIN</h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          {/* Labels and inputs for form data */}

          <div>
            <label className="label">Email</label>
            <input
              onChange={handleEmail}
              placeholder="email"
              className="input form-control"
              value={email}
              type="email"
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              onChange={handlePassword}
              placeholder="password"
              className="input form-control"
              value={password}
              type="password"
            />
          </div>
          <div>
            <label className="label">Role</label>
            <select
              className="form-select"
              defaultValue={"teacher"}
              onChange={handleRole}
            >
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="btn btn-dark"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <Link className="login-link" to="/signup">
          Sign Up?
        </Link>
      </div>
    </div>
  );
}
