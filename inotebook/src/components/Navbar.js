import React, { useEffect } from 'react' // imported useEffect
import { Link, useLocation } from "react-router-dom"; // imported useLoaction
import { useNavigate } from "react-router-dom" //new// imported useNavigate

const Navbar = () => {

  let navigate = useNavigate(); //new// added navigate here

  //new//
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/login") //new// added navigate location here
  }

  // the bellow useLoaction function will print in the console, that what path do we have clicked, it's like home or about
  let location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                {/*  using useLoaction function we have used the above code in the className, that if the user click on the home then highlight the home on the Navbar */}
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>

            {/* //new// we have wrapped this form with condition that if user is logedin then the Logout button should display. */}
            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */} {/* commented */}
              <Link className="btn btn-primary mx-1" to="/Login" role="button">Login</Link>
              <Link className="btn btn-primary mx-1" to="/Signup" role="button">Signup</Link>
            </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
