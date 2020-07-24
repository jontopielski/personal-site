import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import { reset, themes, Anchor, List, ListItem, Divider } from 'react95';
import MenuWindow from './components/MenuWindow/MenuWindow.js';
import './App.css';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App CenterApp">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <header className="App-header">
          <ResetStyles />
          <MenuWindow />
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
  );
}

export default App;
