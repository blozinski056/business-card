import React from "react";
import Image from "../images/IMG_E0267.jpg"
import "../App.css"

export default function Card() {
  return (
    <div className="card">
      <div className="picture">
        <img className="image" src={Image}></img>
      </div>

      <div className="intro">
        <h3 className="name">Bryce Lozinski</h3>
        <h5 className="job">SOFTWARE DEVELOPER</h5>
      </div>

      <div className="buttons">
        <a href="">
          <button className="button-email">
            <div className="email-icon"></div>
            Email
          </button>
        </a>

        <a href="https://www.linkedin.com/in/bryce-lozinski" target="_blank">
          <button className="button-linkedin">
            <div className="linkedin-icon"></div>
            LinkedIn
          </button>
        </a>
      </div>

      <div className="about">
        <h1 className="title">About</h1>
        <p className="body">
          I am originally from Los Angeles. I moved down to San Diego 
          to attend UCSD for my undergraduate Physiology & Neuroscience 
          degree, where I picked up a minor in Computer Science and
          first began to code!
        </p>
      </div>

      <div className="interests">
        <h1 className="title">Interests</h1>
        <p className="body">
          I currently play ultimate frisbee at the professional and club 
          level, in addition to coaching the college team at UCSD. When 
          I am not involved in ultimate, I like to go on hikes, explore 
          new places to eat, play board games, and just hang out with my 
          friends.
        </p>
      </div>
    </div>
  )
}