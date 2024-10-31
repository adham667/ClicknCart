import React, { useState } from "react";
import "./styles.css";
import mainImage from "../../main-image.png";


export default function Signup() {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    function handleClick(){
        console.log(name, email, pass);
        
    }
  return (
    <div>
        <div className="signup">
            <img src={mainImage} alt="random image" />
            <div className="form">
                <div>
                    <h1>Create an account</h1>
                    <span>Enter your details below</span>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                    <input type="text" placeholder="Email or Phone Number" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    <input type="password" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}}></input>
                    <button type="submit" onClick={handleClick}>
                        Create account
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
