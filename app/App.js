import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from './theme';
import { Navbar, Main } from './modules';

const AppBlock = styled.div`
  width: 100%;
  height: 100%;
`;

export const App = () => (
  <AppBlock>
    <ThemeProvider theme={Theme.dark}>
      <Navbar />
      <Main />
    </ThemeProvider>
  </AppBlock>
);
