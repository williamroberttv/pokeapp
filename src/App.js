import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './assets/styles/global';
import light from './assets/styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
