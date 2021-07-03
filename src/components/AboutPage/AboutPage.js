import React from 'react';
import { Avatar, Fieldset, TextArea, Cutout, WindowContent, Anchor, List, ListItem } from 'react95';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Avatar
        src={require("../../assets/DitherCat.png")}
        className="Avatar"
        style={{height: "200px", width: "200px", display: "inline-block"}}
      />
      <WindowContent>
      <p>

      </p>
      <p>
      Hello! I'm <span class="bold">Jon Topielski</span>, a 26 year old game developer from San Francisco, CA. My goal is to make whimsical games that are both accessible and complex.
      </p>
      <br />
      <p>
        I mostly do game jams and have participated in <a href="https://jontopielski.itch.io/">20+</a> since 2019. I use the Godot engine and <a href="https://www.youtube.com/channel/UCny2UUP6CwsblbPIA0GGokg">make tutorials</a> about it.
      </p>
      <br />
      <p>
      Before games, I was a <a href="https://liquipedia.net/starcraft2/Pyre">StarCraft player</a>, engineering student, and software engineer. My other interests include skateboarding, playing guitar, thrifting, and making coffee!
      </p>
      <p>
      </p>
      <br />
      <p class="featured">
      Featured on:
      </p>
      <ul>
        <li class="item">
          <Anchor href="https://youtu.be/9U4Zoagd_40" target="_blank" title="Game Maker's Toolkit">
            <Avatar
              src={require("../../assets/GMTK_logo.jpeg")}
              style={{height: "50px", width: "50px", display: "inline-block"}}
            />
          </Anchor>
        </li>

        <li class="item">
          <Anchor href="https://youtu.be/FPoevE2-E1o" target="_blank" title="Alpha Beta Gamer">
            <Avatar
              src={require("../../assets/AlphaBetaGame_Icon.jpeg")}
              style={{height: "50px", width: "50px", display: "inline-block"}}
            />
          </Anchor>
        </li>

        <li class="item">
          <Anchor href="https://youtu.be/jDku7kRwqAM" target="_blank" title="itch.io">
            <Avatar
              src={require("../../assets/Itch_Logo.png")}
              style={{height: "50px", width: "50px", display: "inline-block"}}
            />
          </Anchor>
        </li>

        <li class="item">
          <Anchor href="https://www.newgrounds.com/portal/view/780222" target="_blank" title="Newgrounds">
            <Avatar
              src={require("../../assets/NewGrounds_Logo.png")}
              style={{height: "50px", width: "50px", display: "inline-block"}}
            />
          </Anchor>
        </li>

        <li class="item">
          <Anchor href="http://warpdoor.com/tag/jon-topielski/" target="_blank" title="Warp Door">
            <Avatar
              src={require("../../assets/Warpdoor.png")}
              style={{height: "50px", width: "50px", display: "inline-block"}}
            />
          </Anchor>
        </li>

        <li class="item">
          <Anchor href="https://game-curator.com/tag/jon-topielski/" target="_blank" title="Game Curator">
            <Avatar
              src={require("../../assets/GameCurator.png")}
              style={{height: "50px", width: "50px", display: "inline-block"}}
            />
          </Anchor>
        </li>

        <li class="item">
          <Anchor href="https://indiegamesplus.com/2020/05/trailer-tuesday-summer-buddy-simulator" target="_blank" title="Indie Games Plus">
            <Avatar
              src={require("../../assets/IGP.jpeg")}
              style={{height: "50px", width: "50px", display: "inline-block"}}
            />
          </Anchor>
        </li>

      </ul>
      </WindowContent>
    </div>
  );
}

export default AboutPage;
