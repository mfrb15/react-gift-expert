import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertAPP } from './GifExpertAPP';
import './styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertAPP />
  </StrictMode>,
);
