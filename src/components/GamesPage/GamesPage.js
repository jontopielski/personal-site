import React from 'react';
import { Avatar, Fieldset, List, ListItem, TextArea, Bar, Divider } from 'react95';
import './GamesPage.css';

function GamesPage() {
  return (
    <div className="GamesPage">
      <Avatar square
        src={require("../../assets/TrollIndexed200x200.png")}
        className="Avatar"
        style={{height: "200px", width: "200px", display: "inline-block"}}
      />
      <br />
      <br />

      <p style={{fontSize: "20px"}}>
        Play all my games&nbsp;
        <a
        style={{textDecoration: "underline", color: "#0d1a8c"}}
        href="https://jontopielski.itch.io/">here</a>
        .
      </p>

      <br />

      <Fieldset label="Cats on Mars">
        <List inline={true} fullWidth>
          <Divider />
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Dec 2020</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">28 days</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Designer</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-laptop" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Programmer</ListItem>
          <Bar />
          <Divider />
        </List>
        <br />
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-newspaper-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Featured on Alpha Beta Gamer, Warp Door, Bontegames, and Curious Arcade</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-users" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Worked with Mafgar (sound effects, music) and Thoof (art)</ListItem>
        </List>
        <br />
        <br />
        <iframe frameborder="0" src="https://itch.io/embed/843633?border_width=2&amp;bg_color=c7cac9&amp;link_color=0d198c" width="552" height="167"><a href="https://jontopielski.itch.io/cats-on-mars">Cats on Mars by Jon Topielski, mafgar, Thoof</a></iframe>
      </Fieldset>

      <br />

      <br />

      <Fieldset label="Spinny Discs">
        <List inline={true} fullWidth>
          <Divider />
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Oct 2020</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">14 days</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Designer</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-laptop" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Programmer</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-paint-brush" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Artist</ListItem>
          <Bar />
          <Divider />
        </List>
        <br />
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-newspaper-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Featured on Warp Door</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-users" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Worked with Mafgar (sound effects, music)</ListItem>
        </List>
        <br />
        <br />
        <iframe frameborder="0" src="https://itch.io/embed/800654?border_width=2&amp;bg_color=c7cac9&amp;link_color=0d198c" width="552" height="167"><a href="https://jontopielski.itch.io/spinny-discs">Spinny Discs by Jon Topielski</a></iframe>
      </Fieldset>

      <br />

      <br />

      <Fieldset label="Keyspace">
        <List inline={true} fullWidth>
          <Divider />
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Oct 2020</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">72 hours</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Designer</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-laptop" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Programmer</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-paint-brush" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Artist</ListItem>
          <Bar />
          <Divider />
        </List>
        <br />
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-trophy" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">101st place overall out of 2,406 entries in Ludum Dare #47</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-newspaper-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Featured on Warp Door</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-users" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Worked with Mafgar (sound effects, music)</ListItem>
        </List>
        <br />
        <br />
        <iframe frameborder="0" src="https://itch.io/embed/778476?border_width=2&amp;bg_color=c7cac9&amp;link_color=0d198c" width="552" height="167"><a href="https://jontopielski.itch.io/keyspace">Keyspace by Jon Topielski</a></iframe>
      </Fieldset>

      <br />

      <br />

      <Fieldset label="Rewindware">
        <List inline={true} fullWidth>
          <Divider />
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">August 2020</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">7 days</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Designer</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-laptop" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Programmer</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-paint-brush" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Artist</ListItem>

          <Bar />
          <Divider />
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-trophy" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">6th place in fun out of 1,838 entries in Brackey's Game Jam 2020.2</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-trophy" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">50th place overall out of 1,838 entries</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-newspaper-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Featured on Warp Door</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-music" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Worked with Mafgar (sound effects, music)</ListItem>
        </List>
        <br />
        <br />
        <iframe frameborder="0" src="https://itch.io/embed/723858?border_width=2&amp;bg_color=c7cac9&amp;link_color=0d198c" width="554" height="169"><a href="https://jontopielski.itch.io/rewindware">Rewindware by Jon Topielski, mafgar</a></iframe>
      </Fieldset>

      <br />

      <Fieldset label="A Midclubber Night's Dream">
        <List inline={true} fullWidth>
          <Divider />
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">June 2020</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">72 hours</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Designer</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-laptop" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Programmer</ListItem>
          <Bar />
          <Divider />
        </List>
        <br />
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-trophy" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">2nd place overall out of 56 entries in Mini Jam #57</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-newspaper-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Accepted into Indiepocalypse Zine Issue #7</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-users" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Worked with Beardy (music), Mafgar (sound effects), and Thoof (art)</ListItem>
        </List>
        <br />
        <br />
        <iframe frameborder="0" src="https://itch.io/embed/683582?border_width=2&amp;bg_color=c7cac9&amp;link_color=0d198c" width="554" height="169"><a href="https://jontopielski.itch.io/a-midclubber-nights-dream">A Midclubber Night's Dream by Jon Topielski, beardyyy, Thoof</a></iframe>
      </Fieldset>

      <br />

      <Fieldset label="This Call May Be Recorded">
        <List inline={true} fullWidth>
          <Divider />
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">May 2020</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">7 days</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Designer</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-laptop" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Programmer</ListItem>
          <Bar />
          <Divider />
        </List>
        <br />
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-trophy" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">2nd place overall out of 174 entries in Weekly Game Jam #150</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-trophy" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">1st place in creativity out of 174 entries</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-newspaper-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Featured on Warp Door</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-shopping-bag" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Included in the Itch.io Bundle for Racial Justice and Equality</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-users" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Worked with Mafgar (sound effects, music) and Thoof (art)</ListItem>
        </List>
        <br />
        <br />
        <iframe frameborder="0" src="https://itch.io/embed/655876?bg_color=c7cac9&amp;link_color=0d1c8d" width="552" height="167"><a href="https://jontopielski.itch.io/this-call-may-be-recorded">This Call May Be Recorded by Jon Topielski, mafgar, Thoof</a></iframe>
      </Fieldset>

      <br />

      <Fieldset label="Ludum Creare">
        <List inline={true} fullWidth>
          <Divider />
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">April 2020</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">72 hours</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Designer</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-laptop" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Programmer</ListItem>
          <Bar />
          <Divider />
        </List>
        <br />
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-trophy" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">37th place overall out of 3,576 entries in Ludum Dare #46 (Jam)</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-newspaper-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Recommended by  Game Curator</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-users" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Worked with Mafgar (sound effects, music) and Datz (art)</ListItem>
        </List>
        <br />
        <br />
        <iframe frameborder="0" src="https://itch.io/embed/619963?bg_color=c7cac9&amp;link_color=0d1c8d" width="552" height="167"><a href="https://jontopielski.itch.io/ludum-creare">Ludum Creare by Jon Topielski, Datzz2, mafgar</a></iframe>
      </Fieldset>
      <br />

      <Fieldset label="Ghost Roulette">
        <List inline={true} fullWidth>
          <Divider />
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">April 2020</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">11 days</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-pencil" aria-hidden="true"></i>
            <i class="fa fa-laptop" aria-hidden="true"></i>
            <i class="fa fa-paint-brush" aria-hidden="true"></i>
            <i class="fa fa-music" aria-hidden="true"></i>

          </ListItem>
          <ListItem size="sm">Sole Developer</ListItem>
          <Bar />
          <Divider />
        </List>
        <br />
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-trophy" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">1st place in gameplay out of 129 entries in Major Jam: Isolation</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-newspaper-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Featured on Warp Door, Game Curator, and Indie Games Plus</ListItem>
        </List>
        <br />
        <br />
        <iframe frameborder="0" src="https://itch.io/embed/601618?bg_color=c7cac9&amp;link_color=0d1c8d" width="552" height="167"><a href="https://jontopielski.itch.io/ghost-roulette">Ghost Roulette by Jon Topielski</a></iframe>
      </Fieldset>

      <br />

      <Fieldset label="Tip of the Icebug">
        <List inline={true} fullWidth>
          <Divider />
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Jan 2020</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">72 hours</ListItem>
          <Bar />
          <ListItem size="sm">
            <i class="fa fa-pencil" aria-hidden="true"></i>
            <i class="fa fa-laptop" aria-hidden="true"></i>
            <i class="fa fa-paint-brush" aria-hidden="true"></i>
            <i class="fa fa-music" aria-hidden="true"></i>

          </ListItem>
          <ListItem size="sm">Sole Developer</ListItem>
          <Bar />
          <Divider />
        </List>
        <br />
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-trophy" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">1st place in simplicity out of 351 entries in Wowie Jam 2.0</ListItem>
        </List>
        <br />
        <List inline={true} fullWidth>
          <ListItem size="sm">
            <i style={{width: "21px"}} class="fa fa-newspaper-o" aria-hidden="true"></i>
          </ListItem>
          <ListItem size="sm">Featured on Warp Door, Game Curator, and Bontegames</ListItem>
        </List>
        <br />
        <br />
        <iframe frameborder="0" src="https://itch.io/embed/552926?bg_color=c7cac9&amp;link_color=0d1c8d" width="552" height="167"><a href="https://jontopielski.itch.io/tip-of-the-icebug">Tip of the Icebug by Jon Topielski</a></iframe>
      </Fieldset>

      <br />

      <p style={{fontSize: "20px"}}>
        You can find the rest of my games&nbsp;
        <a
        style={{textDecoration: "underline", color: "#0d1a8c"}}
        href="https://jontopielski.itch.io/">here</a>
        .
      </p>

    </div>
  );
}

export default GamesPage;
