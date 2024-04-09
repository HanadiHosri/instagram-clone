import "./style.css";
import Signup from "./components/Signup";
import { useState } from "react";
import Signin from "./components/Signin";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            {isLogin ? (<Signin setIsLogin={setIsLogin}/>) : (<Signup setIsLogin={setIsLogin}/>) }
        </div>
    )
}

export default Auth;