import React from 'react';
import type {Node} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {Navigation} from './src/infrastructure/navigation/index';

const App: () => Node = () => {
  return (
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
  );
};

export default App;
