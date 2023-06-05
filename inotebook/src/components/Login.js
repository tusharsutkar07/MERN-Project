import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // this will avoid the page reload.

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            // Save the authtoken and redirect
            localStorage.setItem('token', json.authtoken); // saving token to the local storage.
            navigate("/")
            props.showAlert("Logged in successfully", "success") //
        }
        else {
            // alert("Invalid credentials Doremon") // commented this because it is good to use bellow line.
            props.showAlert("Invalid credentials Doremon", "danger") //
        }
    }

    //  basically onChange function will add the typed value in the discription or the title
    const onChange = (e) => { // we have taken the event's e in the onChange(e)
        setCredentials({ ...credentials, [e.target.name]: e.target.value }) // this lines means: whatever values in the note object has it will keep there but new written properties should be add or overwrite ( [e.target.name] : e.target.value )
        // the above we have used the ... which is a spread operator.
    }

    return (
        <div className="mt-3">
            <h2>Login to continue to iNotebook</h2> {/* new */}
            {/* copied this for from bootstrap 5.0 */}
            <form onSubmit={handleSubmit}> {/* used onSubmit */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
