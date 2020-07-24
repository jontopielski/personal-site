import React from 'react';
import { Avatar, Fieldset, TextArea, Cutout } from 'react95';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Avatar square
        src={require("../../assets/DesertIndexed256x256.png")}
        className="Avatar"
        style={{height: "200px", width: "200px", display: "inline-block"}}
      />
      <br />
      <br />
      <p>
        Welcome to my web page!
      </p>
      <br />
      <p>
        My name is Jon and I'm a software engineer who likes
      </p>
      <p>
        to make games and occasionally art and music.
      </p>
      <br />
      <p>
        My hobbies include chess, starcraft, guitar, piano,
      </p>
      <p>
        coffee, streetwear, and skateboarding!
      </p>
      <br />
      <p>
        You can play my games&nbsp;
        <a
        style={{textDecoration: "underline", color: "#0d1a8c"}}
        href="https://jontopielski.itch.io/">here</a>
        .
      </p>
    </div>
  );
}

export default AboutPage;
