import { useRef, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import styled from "styled-components"
import { signup } from "../components/action";

const Signup =()=>{
    const emailRef = useRef(null);
    const passwordRef =useRef(null);
    const usernameRef =useRef(null);

    const [showPassword, setShowpassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email:emailRef.current?.value,
            password:passwordRef.current?.value,
            username:usernameRef.current?.value
        }

        signup(user)
    };

    return <>
        <DIV>
            <div className="signupBox">
                <form onSubmit={handleSubmit}>
                    <h2>Signup Page</h2>
                    <input type="text" placeholder="Enter Username" ref={usernameRef} required/>
                    <input type="text" placeholder="Enter Email" ref={emailRef} required />
                    <div className="password-input">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            ref={passwordRef}
                            required
                        />
                        <input
                            type="checkbox"
                            className="show-password-checkbox"
                            onClick={() => setShowpassword(!showPassword)}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account <Link to="/login">Login</Link></p>
            </div>
        </DIV>
    </>
}

export {Signup}

const DIV = styled.div`
    width: 100%;
    
    .signupBox {
        width: 350px;
       padding: 20px;
       border: 1px solid black;
       border-radius:20px;
       margin: auto;
       margin-top:50px;
    }
    form {
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    form > input {
        padding: 10px;
        margin-bottom:10px;
        border-radius:5px;
        cursor: pointer;
    }
    input:nth-child(5)
    {
        font-size: 20px;
        background-color:green;
        color:white;
    }
    a {
        color: red;
        text-decoration:none;
    }
    .password-input {
        border:2px solid black;
        border-radius:5px;
        margin-bottom:10px;
        display: flex;
        position: relative;
        overflow: hidden;
    }
    .password-input input:nth-child(1){
        width: 100%;
        padding: 10px;
        border: none;
    }
    .show-password-checkbox {
       position: absolute;
       right: 10px;
       top: 50%;
       transform: translateY(-50%);
    }

`