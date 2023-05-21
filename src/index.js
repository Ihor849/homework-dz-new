import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './style/GlobalStyle';
import { BrowserRouter } from "react-router-dom";
import {App} from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="homework-dz-new">
      <App />
    </BrowserRouter >
    <GlobalStyle />
  </React.StrictMode>
);
