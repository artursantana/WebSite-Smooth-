import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'imgStart'}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
