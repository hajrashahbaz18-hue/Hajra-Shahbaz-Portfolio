import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Import design styles
import './styles/modern.css';
import './styles/navigation.css';
import './styles/hero.css';
import './styles/projects.css';
import './styles/project-detail.css';
import './styles/sections.css';
import './styles/contact-modal.css';
import './styles/footer.css';
import './styles/animations.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
