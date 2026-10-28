/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsAndAchievements } from './components/CertificationsAndAchievements';
import { HackathonsSection } from './components/HackathonsSection';
import { ResumeSection } from './components/ResumeSection';
import { GitHubSection } from './components/GitHubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { PhotoCustomizerModal } from './components/PhotoCustomizerModal';
import { portfolioData } from './portfolioData';

export default function App() {
  // Dark mode state: default to true (dark mode by default per design requirements)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('aravindh_theme');
      if (stored === 'light') return false;
    }
    return true;
  });

  // Photo state with persistence in localStorage if customized by user
  const [currentPhoto, setCurrentPhoto] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const storedPhoto = localStorage.getItem('aravindh_custom_photo');
      if (storedPhoto && !storedPhoto.includes('aravindhan_profile_photo_')) {
        return storedPhoto;
      }
    }
    return portfolioData.personal.profilePhoto;
  });

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  // Sync dark mode class with <html> element and persist in localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('aravindh_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('aravindh_theme', 'light');
    }
  }, [darkMode]);

  const handleUpdatePhoto = (newPhoto: string) => {
    setCurrentPhoto(newPhoto);
    localStorage.setItem('aravindh_custom_photo', newPhoto);
  };

  const handleResetPhoto = () => {
    setCurrentPhoto(portfolioData.personal.profilePhoto);
    localStorage.removeItem('aravindh_custom_photo');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0a0f1d] dark:text-slate-100 transition-colors duration-200">
      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        {/* 1. Hero Section */}
        <Hero
          currentPhoto={currentPhoto}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        />

        {/* 2. About Me / Passion */}
        <AboutSection />

        {/* 3. Education Timeline */}
        <EducationSection />

        {/* 4. Skills Grouped Cards */}
        <SkillsSection />

        {/* 5. Projects Showcase with Interactive Notes Generator */}
        <ProjectsSection />

        {/* 6. Internship Experience */}
        <ExperienceSection />

        {/* 7. Certifications & Achievements */}
        <CertificationsAndAchievements />

        {/* 8. Hackathons & Activities */}
        <HackathonsSection />

        {/* 9. Resume Section & Preview */}
        <ResumeSection />

        {/* 10. Open Source / GitHub Section */}
        <GitHubSection />

        {/* 11. Contact Form & Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Profile Photo Customizer Modal */}
      <PhotoCustomizerModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={currentPhoto}
        onUpdatePhoto={handleUpdatePhoto}
        onResetPhoto={handleResetPhoto}
      />
    </div>
  );
}
