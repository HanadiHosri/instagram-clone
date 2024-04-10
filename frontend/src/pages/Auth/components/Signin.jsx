import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const navigate = useNavigate();

    const login = async () => {
        try {
            const {email, password} = credentials;
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);

            const response = await axios.post (
                "http://127.0.0.1:8000/api/login",
                formData,
            );
            if (response.data.status === "success") {
                localStorage.setItem('token', response.data.authorisation.token);
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
                <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                    setCredentials({
                        ...credentials,
                        email: e.target.value,
                    });
                }}
                />
                <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                    setCredentials({
                        ...credentials,
                        password: e.target.value,
                    });
                }}
                />
                <button className="button primary-bg rounded white-text" onClick={login}>Log in</button>
            </div>
            <div className="container">
                <p>Don't have an account? <a onClick={() => props.setIsLogin(false)}>Sign up</a></p>
            </div>
        </div>
    )
}

export default Signin;