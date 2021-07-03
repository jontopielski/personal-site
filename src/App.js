import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import { styleReset, Anchor, List, ListItem, Divider } from 'react95';
import original from "react95/dist/themes/original";
import raspberry from "react95/dist/themes/raspberry";
import millenium from "react95/dist/themes/millenium";
import theSixtiesUSA from "react95/dist/themes/theSixtiesUSA";
import tokyoDark from "react95/dist/themes/tokyoDark";
import blackAndWhite from "react95/dist/themes/blackAndWhite";
import highContrast from "react95/dist/themes/highContrast";
import hotdogStand from "react95/dist/themes/hotdogStand";
import powerShell from "react95/dist/themes/powerShell";
import MenuWindow from './components/MenuWindow/MenuWindow.js';
import Countdown from './components/Countdown/Countdown.js'
import './App.css';

const ResetStyles = createGlobalStyle`
  ${styleReset}
`;

const ThemeList = [
  raspberry, theSixtiesUSA, tokyoDark, original, hotdogStand
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeIndex: 0
    }
    this.handleCloseClicked = this.handleCloseClicked.bind(this);
  }

  handleCloseClicked() {
    var nextThemeIndex = this.state.themeIndex + 1 == ThemeList.length ? 0 : this.state.themeIndex + 1;
    this.setState({
      themeIndex: nextThemeIndex
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/countdown">
            <Countdown />
          </Route>
          <Route path="/">
            <div className="App CenterApp">
              <ResetStyles />
              <ThemeProvider theme={ThemeList[this.state.themeIndex]}>
                <header className="App-header">
                  <ResetStyles />
                  <MenuWindow onCloseClicked={this.handleCloseClicked}/>
                  <div>
                    <Anchor href="https://github.com/arturbien/React95"
                      target="_blank"
                      style={{fontSize: "15px", opacity: "0.5"}}
                    >
                      Site styled using React95
                    </Anchor>
                  </div>
                </header>
              </ThemeProvider>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
