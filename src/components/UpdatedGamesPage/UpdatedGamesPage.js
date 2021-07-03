import React from 'react';
import { Avatar, Fieldset, TextArea, Cutout, WindowContent, Anchor, List, ListItem } from 'react95';
import './UpdatedGamesPage.css';

function UpdatedGamesPage() {
  return (
    <div className="UpdatedGamesPage">
      <Avatar
        src={require("../../assets/PhoDither.png")}
        className="Avatar"
        style={{height: "200px", width: "200px", display: "inline-block"}}
      />
      <WindowContent>
      <p>
      All my games are available on my <a href="https://jontopielski.itch.io/">itch.io</a> page.
      </p>

      <br />

      <ul>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/puzzle-sigma" target="_blank" title="Puzzle Sigma">
            <Avatar square
              src={require("../../assets/games/PuzzleSigma.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/cats-on-mars" target="_blank" title="Cats on Mars">
            <Avatar square
              src={require("../../assets/games/CatsOnMars.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/spinny-discs" target="_blank" title="Spinny Discs">
            <Avatar square
              src={require("../../assets/games/SpinnyDiscsSimple.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/into-the-deep-web" target="_blank" title="Into the Deep Web">
            <Avatar square
              src={require("../../assets/games/IntoTheDeepWeb.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
      </ul>

      <br />

      <ul>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/this-call-may-be-recorded" target="_blank" title="This Call May Be Recorded">
            <Avatar square
              src={require("../../assets/games/ThisCallMayBeRecorded.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/keyspace" target="_blank" title="Keyspace">
            <Avatar square
              src={require("../../assets/games/KeySpaceSimple.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/ludum-creare" target="_blank" title="Ludum Creare">
            <Avatar square
              src={require("../../assets/games/LDSimple.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/portalbot" target="_blank" title="Portal Bot">
            <Avatar square
              src={require("../../assets/games/PBSimple.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
      </ul>

      <br />

      <ul>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/ghost-roulette" target="_blank" title="Ghost Roulette">
            <Avatar square
              src={require("../../assets/games/GhostRouletteSimple.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/tip-of-the-icebug" target="_blank" title="Tip of the Icebug">
            <Avatar square
              src={require("../../assets/games/BitlySimple.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/a-midclubber-nights-dream" target="_blank" title="A Midclubber Night's Dream">
            <Avatar square
              src={require("../../assets/games/Midclubber.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
        <li class="item">
          <Anchor href="https://jontopielski.itch.io/rewindware" target="_blank" title="Rewindware">
            <Avatar square
              src={require("../../assets/games/RewindwareSimple.png")}
              style={{height: "100px", width: "100px", display: "inline-block"}}
            />
          </Anchor>
        </li>
      </ul>

      </WindowContent>
    </div>
  );
}

export default UpdatedGamesPage;
