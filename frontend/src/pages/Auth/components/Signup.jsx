import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [credentials, setCredentials] = useState({email: "", password: "", name: ""});
    const navigate = useNavigate();

    const register = async () => {
        try {
            const {email, password, name} = credentials;
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('name', name);

            const response = await axios.post (
                "http://127.0.0.1:8000/api/register",
                formData,
            );
            if (response.data.status ==="success") {
                navigate("/profile");
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="page column center gap">
            <div className="container small-gap">
                <h1>Instagram</h1>
                <p>Sign up to see photos and videos from your friends</p>
                <input 
                type="text"
                placeholder="Email"
                onChange={(e) => {
                    setCredentials({...credentials, email: e.target.value,});
                }}
                />
                <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                    setCredentials({...credentials, name: e.target.value,});
                }}
                />
                <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                    setCredentials({...credentials, password: e.target.value,});
                }}
                />
                <p className="small-text">People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                <p className="small-text">By signing up, you agree to our Terms, Privacy Policy and Coocies Policy</p>
                <button className="button primary-bg rounded white-text" onClick={register}>Sign up</button>
            </div>
            <div className="container">
                <p>Have an account? <a href="/login">Log in</a></p>
            </div>
        </div>
    )
}

export default Signup;