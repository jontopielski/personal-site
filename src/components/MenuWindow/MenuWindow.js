import React from 'react';
import { Window, WindowHeader, Button, Toolbar, WindowContent } from 'react95';
import AboutPage from '../AboutPage/AboutPage';
import GamesPage from '../GamesPage/GamesPage';
import ArtPage from '../ArtPage/ArtPage';
import MusicPage from '../MusicPage/MusicPage';
import RandomPage from '../RandomPage/RandomPage';
import ContactPage from '../ContactPage/ContactPage';

import './MenuWindow.css';

const PAGE_ABOUT = "PAGE_ABOUT"
const PAGE_GAMES = "PAGE_GAMES"
const PAGE_ART = "PAGE_ART"
const PAGE_MUSIC = "PAGE_MUSIC"
const PAGE_RANDOM = "PAGE_RANDOM"
const PAGE_CONTACT = "PAGE_CONTACT"

class MenuWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: PAGE_ABOUT
    }
  }

  handleButtonClick(nextPage) {
    console.log(nextPage);
    this.setState({
      currentPage: nextPage
    });
  }

  render() {
    let nextPage = <AboutPage />;
    if (this.state.currentPage == PAGE_ABOUT) {
      nextPage = <AboutPage />;
    } else if (this.state.currentPage == PAGE_GAMES) {
      nextPage = <GamesPage />;
    } else if (this.state.currentPage == PAGE_ART) {
      nextPage = <ArtPage />;
    } else if (this.state.currentPage == PAGE_MUSIC) {
      nextPage = <MusicPage />;
    } else if (this.state.currentPage == PAGE_RANDOM) {
      nextPage = <RandomPage />;
    } else if (this.state.currentPage == PAGE_CONTACT) {
      nextPage = <ContactPage />;
    }
    return (
      <div>
        <Window>
          <WindowHeader
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>Welcome</span>
            <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
              <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
            </Button>
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="md" onClick={() => this.handleButtonClick(PAGE_ABOUT)}>
              About
            </Button>
            <Button variant="menu" size="md" onClick={() => this.handleButtonClick(PAGE_GAMES)}>
              Games
            </Button>
            <Button variant="menu" size="md" onClick={() => this.handleButtonClick(PAGE_CONTACT)}>
              Contact
            </Button>
          </Toolbar>
          <WindowContent>
            {nextPage}
          </WindowContent>
        </Window>
      </div>
    );
  }
}

export default MenuWindow;
