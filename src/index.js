import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';

import { theme } from './style/theme';

import AppHook from 'components/App/AppHook';
import { GlobalStyle } from './style/GlobalStyle';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppHook />
      </Provider>
      </ThemeProvider>
      <GlobalStyle />
    
  </React.StrictMode>
);
