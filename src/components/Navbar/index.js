import React from 'react'
import { Link } from "react-router-dom";
import"./index.css"

export default function Navbar() {
    return (
        <div>
           <Link to="/" className="homeButton"> HOME </Link> 
        </div>
    )
}