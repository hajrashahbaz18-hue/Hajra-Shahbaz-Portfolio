import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="app-layout">
      <Navbar onOpenContact={handleOpenContact} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onOpenContact={handleOpenContact} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetailPage onOpenContact={handleOpenContact} />}
          />
        </Routes>
      </main>
      <Footer onOpenContact={handleOpenContact} />
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
