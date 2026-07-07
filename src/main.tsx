import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from '@/app/App';
import '@/styles/index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (import.meta.env.PROD && container.childElementCount > 0) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
