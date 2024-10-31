import React, {useState} from "react";
import mainImage from "../../main-image.png";
import { IoEyeOutline } from "react-icons/io5";
import "./styles.css";
export default function Login() {

  const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")


  function handleClick() {
    console.log(email, pass);
    
  }
  return (
    <div className="login">
      <img src={mainImage} alt="random image" />
      <div className="form">
        <div>
          <h1>Log in to Click n Cart</h1>
          <span>Enter your details below</span>
          <input type="text" placeholder="Email or Phone Number" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
          <div className="pass">
            <input type="password" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}}></input>
          </div>
          <div className="buttons">
            <button type="submit" onClick={handleClick}>
              Login
            </button>
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
