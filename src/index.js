import React from 'react';
import ReactDOM from 'react-dom/client';

// import { Provider } from 'react-redux';
// import {store} from 'redux/store';

import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import AppHook from 'components/App/AppHook';
import { GlobalStyle } from './style/GlobalStyle';




ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
     {/* <Provider store={store}> */}
    <ThemeProvider theme={theme}>
   
      <AppHook />
      
    </ThemeProvider>
    {/* </Provider> */}
    <GlobalStyle />
  </React.StrictMode>
);
