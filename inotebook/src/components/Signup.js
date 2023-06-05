import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => { // we wrote the props

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // this will avoid the page reload.
    const { name, email, password } = credentials; //destructuring

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }) //this will go to the body.
    });
    const json = await response.json()
    console.log(json)
    if (json.success) {
      // Save the authtoken and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/")
      props.showAlert("Account created successfully", "success") //
    }
    else {
      // alert("Invalid credentials Doremon") // commented this because it is good to use bellow line.
      props.showAlert("Invalid details Doremon", "danger") //
    }
  }

  //  basically onChange function will add the typed value in the discription or the title
  const onChange = (e) => { // we have taken the event's e in the onChange(e)
    setCredentials({ ...credentials, [e.target.name]: e.target.value }) // this lines means: whatever values in the note object has it will keep there but new written properties should be add or overwrite ( [e.target.name] : e.target.value )
    // the above we have used the ... which is a spread operator.
  }


  return (
    <div className="container mt-2">
      <h2 className="my-2">Create an account to use iNotebook</h2> {/* new */}
      <form onSubmit={handleSubmit}>

        <div className="my-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={3} required />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={3} required />
        </div>

        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
