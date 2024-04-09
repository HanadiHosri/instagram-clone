import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    return (
        <div className="page column center gap">
            <div className="container small-gap">
                <h1>Instagram</h1>
                <input placeholder="Username or email"/>
                <input placeholder="Password" />
                <button className="button primary-bg rounded white-text">Log in</button>
            </div>
            <div className="container">
                <p>Don't have an account? Sign up</p>
            </div>
        </div>
    )
}

export default Signin;