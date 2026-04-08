import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@zen/tokens';
import './global.css';
import { App } from './App';
import { applyBrandHue } from './brand';

// Apply orange brand + brand emphasis for VNGGames Portal
applyBrandHue('orange');
document.documentElement.setAttribute('data-component-theme', 'brand');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
