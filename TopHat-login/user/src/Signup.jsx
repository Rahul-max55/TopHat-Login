import React, { useState } from 'react';

const Signup = () => {

    const [signVal, setSignVal] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignVal({ ...signVal, [name]: value })
    }

    const { email, password } = signVal;

    const handleSign = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
          
        }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                alert("Registered successfully")
                console.log("Registered successfully");
            } else {
                console.log("Registered failed");
            }
        }).catch((err) => {
            console.log("error is occured Signup page" + err);
        })
    }
    return (
        <>
            <div className="centerContainer">
                <h1>SignUp Page</h1>
                <form method='POST'>
                    <input type="email" name='email' value={signVal.email} required onChange={handleChange} placeholder="Enter email" /> <br /> <br />
                    <input type="password" value={signVal.pass
                    } name='password' required onChange={handleChange} placeholder="Enter password" /> <br /> <br />
                    <input type="button" value="signup" onClick={handleSign} />
                </form>
            </div>

        </>
    )
}

export default Signup