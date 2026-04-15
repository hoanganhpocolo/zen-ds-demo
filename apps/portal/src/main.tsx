import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@zen/tokens';
import './brand-override.css';
import './global.css';
import { App } from './App';

// Brand emphasis for VNGGames Portal
document.documentElement.setAttribute('data-component-theme', 'brand');
document.documentElement.setAttribute('data-brand-bright', 'false');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
