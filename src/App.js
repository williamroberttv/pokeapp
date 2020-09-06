import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import GlobalStyle from './assets/styles/global';
import light from './assets/styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
