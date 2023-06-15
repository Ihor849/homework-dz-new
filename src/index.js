import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './style/GlobalStyle';
import { BrowserRouter } from "react-router-dom";
import {App} from 'components/App/App';
import './style/styles.css'
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="homework-dz-new">
            <App />
          </BrowserRouter >
        </PersistGate>
      </Provider>
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
