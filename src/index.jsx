import React, { StrictMode } from 'react';
import App from 'src/App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StrictMode><App tab="home" /></StrictMode>);