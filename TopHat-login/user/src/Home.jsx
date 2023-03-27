import React, { useState } from 'react'

const Home = () => {

    const [like, setLike] = useState(0);

    const [postVal, setPostVal] = useState({
        title: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostVal({ ...postVal, [name]: value })
    }

    const { title, message } = postVal;
    // console.log(title,message);

    const postData = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/postSave", {
            method: "post",
            headers: {
                'Content-type': "application/json"
            },
            body:JSON.stringify({ title, message }) 
        }).then((res) => {
            if (res.status === 200) {
                alert("Login successfully")
                console.log("Login successfully");
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
                <form method="post">
                    <input type="text" name="title" required placeholder='please enter title' onChange={handleChange} /> <br /> <br />
                    <input type="text" name="message" required placeholder='please enter message' onChange={handleChange} /> <br /> <br />
                    <input type="button" value="Post" onClick={postData} />
                </form>
            </div>

            <div className="centerContainer">
                <div className="card">
                    <h1>Title</h1>
                    <p>paragraph</p>
                    <div className="con">
                        <p>{like}</p>
                        <button onClick={() => like === 0 ? setLike(1) : setLike(0)} >Like</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home