import React from 'react';
import App from 'src/App';
import { BrowserRouter } from 'react-router-dom'
import { hydrateRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = hydrateRoot(container, <App tab="home" />);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

