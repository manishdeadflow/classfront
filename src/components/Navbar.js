import logo from "../images/logo-white.png"
import "./Navbar.css"
import { useNavigate } from "react-router-dom"


const Navbar = function () {
  
  const navigate = useNavigate();

  const logoutHandler = () =>{
    localStorage.removeItem('Authorization')
    navigate('/login')
  }

  return(
    <div className="navbar">
    <img className="navbar-logo" src={logo} />
    <div>
      <button onClick={logoutHandler} className="btn btn-light ">Log Out</button>
    </div>
    </div>
  )
}

export default Navbar;
