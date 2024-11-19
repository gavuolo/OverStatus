import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
