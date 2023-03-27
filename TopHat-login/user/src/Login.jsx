import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();

    const [loginVal, setLoginVal] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginVal({ ...loginVal, [name]: value })
    }

    const { email, password } = loginVal;

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(email);
        fetch("http://localhost:8000/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ email, password }) 

        }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                alert("Login successfully")
                console.log("Login successfully");
                navigate("/")
            } else {
                console.log("login failed");
            }
        }).catch((err) => {
            console.log("error is occured Login page" + err);
        })
        

    }

    return (
        <>
            <div className="centerContainer">
                <h1>Login Page</h1>
                <form method='post'>
                    <input type="email" value={loginVal.email} name='email' required onChange={handleChange} placeholder="Enter email" /> <br /> <br />
                    <input type="password" value={loginVal.password
                    } name='password' placeholder="Enter Password" required onChange={handleChange} /> <br /> <br />
                    <input type="button" value="login" onClick={handleLogin} />
                </form>
            </div>
        </>
    )
}

export default Login