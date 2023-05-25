import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/globalStyles.ts';

import App from './App.tsx';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme.ts';
import { GlobalStyle } from './styles/globalStyles.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
