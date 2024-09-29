import { StrictMode } from 'react';
import App from 'src/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StrictMode><BrowserRouter><App tab="home" /></BrowserRouter></StrictMode>);