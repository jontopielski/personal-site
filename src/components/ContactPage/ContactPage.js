import React from 'react';
import { Avatar, Fieldset, TextArea, Hourglass, List, ListItem, Bar } from 'react95';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="ContactPage">
      <Avatar square
        src={require("../../assets/SkiIndexed200x200.png")}
        className="Avatar"
        style={{height: "200px", width: "200px", display: "inline-block"}}
      />
      <br />
      <br />
      <p>
        Want to chat?
      </p>
      <Hourglass size={32} />
      <p>
        Don't hesitate to ping me!
      </p>
      <br />
      <Fieldset>
      <List inline={true} style={{width: "280px"}}>
        <ListItem size="sm">
          <i style={{width: "21px"}} class="fa fa-envelope-square" aria-hidden="true"></i>
        </ListItem>
        <ListItem size="sm">
          jontopielski@gmail.com
        </ListItem>
      </List>
      <br />
      <List inline={true} style={{width: "280px"}}>
        <ListItem size="sm" >
          <i style={{width: "21px"}} class="fa fa-discord" aria-hidden="true"></i>
        </ListItem>
        <ListItem size="sm">jontopielski#7219</ListItem>
      </List>
      <br />

      <List inline={true} style={{width: "280px"}}>
        <ListItem size="sm">
          <i style={{width: "21px"}} class="fa fa-twitter-square" aria-hidden="true"></i>
        </ListItem>
        <ListItem size="sm">
        <a href="https://twitter.com/jontopielski" target="_blank">
          @jontopielski
        </a>
        </ListItem>
      </List>
      <br />
      <List inline={true} style={{width: "280px"}}>
        <ListItem size="sm">
          <i class="fa fa-gamepad" aria-hidden="true"></i>
        </ListItem>
        <ListItem size="sm">
        <a href="https://jontopielski.itch.io" target="_blank">
          jontopielski.itch.io
        </a>
        </ListItem>
      </List>

      </Fieldset>

    </div>
  );
}

export default ContactPage;
