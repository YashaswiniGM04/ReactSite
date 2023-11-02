
import React from "react"
import imgSrc from "../React-logo.png"


export default function Nav() {
    return (
        <nav className="nav-items">
          <img className = "img-ele" src={imgSrc} ></img>
          <h2 className="ReactFacts">ReactFacts</h2>
          <h4>React Course - Project 2</h4>
        </nav>
    )
  }