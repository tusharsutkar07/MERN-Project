import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react'; // 

const App = () => {


  // this is for alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => { // this is showAlert function that will take massage and type (alert type).
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  return (
    <>
      <NoteState> {/* we put the all component inside the <NoteState> so all these components can use the context api. */}
        <Router>

          <Navbar />
          <Alert alert={alert}/> {/*  added Alert component */}

          <div className="container"> {/*  we put <Routes> components in this div */}
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} /> {/* we give the showAlert */}
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} /> {/* we give the showAlert */}
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} /> {/* we give the showAlert */}
            </Routes>
          </div>

        </Router>
      </NoteState>

    </>
  )
}

export default App

