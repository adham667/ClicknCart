import React from 'react'
import { IoSend } from "react-icons/io5";
import qr from '../../Untitled.jpeg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './styles.css'

export default function Footer() {
  return (
    <div className='container'>
    <div className='footer'>
        <div className='exclusive'>
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <span>Get 10% off your first order</span>
            <div className='sub'>
                <input type='email' placeholder='Enter your email'></input>
                <IoSend />
            </div>
        </div>
        <div className='support'>
            <h3>Support</h3>
            <p>
            111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+xxxxx-xxxxx-xxxx</p>
        </div>
        <div className='account'>
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div className='link'>
            <h3>Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div className='download'>
            <h3>Download App</h3>
            <img alt='qr code' src={qr}/>
            <p>Save $3 with App New User Only</p>
            <div className='social'>
                <FaFacebookF/>
                <FaInstagram/>
                <FaLinkedinIn/>
                <FaTwitter/>
            </div>
        </div>
    </div>
        <div className='copy'>
        &copy; {new Date().getFullYear()} ClicknCart. All rights reserved.
        </div>
    </div>
  )
}
