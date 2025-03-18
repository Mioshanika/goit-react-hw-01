import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.module.css';
import App from './components/app/app.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
