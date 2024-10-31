import React from "react";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import "./styles.css";
export default function Header({ logged }) {
  return (
    <div className="header">
      <h1>clickNcart</h1>
      <ul className="header-menu">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className="menu">
        <div className="search">
          <input type="text" placeholder="what are you looking for?"></input>
          <FaSearch />
        </div>
        <FaRegHeart className="icon" />
        <IoCartOutline className="icon" />
        {!logged && <button className="mybutton">Login</button>}
        {!logged && <button className="mybutton">SignUp</button>}
      </div>
    </div>
  );
}
