import React from "react";
import {FaBars} from "react-icons/fa";
import logo from "../assets/lm-logo.png"

export default function Navbar(){
    return (
        <nav>
            <img className="nav--logo" src={logo} alt="logo" />
            <FaBars className="ham"/>
        </nav>
    )
}