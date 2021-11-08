import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//// Styles
import './index.css';
import * as theme from './config/Colors';
import { ThemeProvider } from 'styled-components';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

//Router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
