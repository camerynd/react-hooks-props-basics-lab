import React from "react";
import Links from "./Links";
import user from "../data/user";
import RenderBio from "./RenderBio"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <RenderBio bioContent={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.link1} linkedin={props.link2}/>
    </div>
  );
}

export default About;
