import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [teamProfiles, setTeamProfiles] = useState({
    Dill1027: null,
    Dilshani16: null,
    dilkihewage: null,
    praweenanuwangee: null
  });

  const dill1027ProfileOverride = {
    displayName: 'Prabhath Dill',
    pronouns: 'he/him',
    bio: "I'm passionate about coding, problem solving and exploring new technologies. With 3+ years of experience in the IT field, I enjoy creating innovative solutions.",
    followers: 4,
    following: 6,
    company: 'Deep Tec Engineering (Pvt) Ltd',
    location: '14:54 (UTC +05:30)',
    username: 'dill_abeysinghe',
    fullName: 'PrabhathDilshanAbeysinghe',
    linkedinUrl: 'https://www.linkedin.com/in/prabhath-dilshan-abeysinghe',
    facebookUrl: 'https://www.facebook.com/PrabhathDilshanAbeysinghe/',
    instagramUrl: 'https://www.instagram.com/dill_abeysinghe/',
    tiktokUrl: 'https://www.tiktok.com/@prabhath_dil'
  };

  const dilshani16ProfileOverride = {
    linkedinUrl: 'https://www.linkedin.com/in/dilshani-senavirathna-4761b7330/'
  };

  const dilkihewageProfileOverride = {
    linkedinUrl: 'https://www.linkedin.com/in/dilki-hewage-b6b888318/',
    facebookUrl: 'https://fb.com/dilki%20hewage',
    instagramUrl: 'https://instagram.com/dilki%20hewage'
  };

  const praweenanuwangeeProfileOverride = {
    linkedinUrl: 'https://www.linkedin.com/in/praweena-nuwangee-62a299287',
  };

  const renderSocialIcon = (type) => {
    if (type === 'github') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.48v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.07 1.56 1.07.9 1.57 2.37 1.12 2.95.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .85-.28 2.78 1.05.8-.23 1.66-.35 2.52-.35.86 0 1.72.12 2.52.35 1.93-1.33 2.78-1.05 2.78-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.58 5.07.36.32.68.94.68 1.89v2.8c0 .26.18.57.69.47A10.27 10.27 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
        </svg>
      );
    }

    if (type === 'website') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.93 9h-3.17a15.7 15.7 0 0 0-1.14-5.15A8.03 8.03 0 0 1 19.93 11ZM12 4.07c.8 1.13 1.48 2.87 1.95 4.93h-3.9c.47-2.06 1.15-3.8 1.95-4.93ZM4.07 13h3.17c.23 1.86.67 3.6 1.14 5.15A8.03 8.03 0 0 1 4.07 13Zm3.17-2H4.07a8.03 8.03 0 0 1 4.31-5.15A15.7 15.7 0 0 0 7.24 11Zm2.07 0a13.4 13.4 0 0 1 1.06-4.46A13.4 13.4 0 0 1 11.43 11H9.31Zm2.69 0c.08-1.58.35-3.07.78-4.27.43 1.2.7 2.69.78 4.27H12Zm.78 2c-.08 1.58-.35 3.07-.78 4.27-.43-1.2-.7-2.69-.78-4.27h1.56Zm-3.47 0h2.1a13.4 13.4 0 0 1-1.05 4.46A13.4 13.4 0 0 1 9.31 13Zm5.38 0h3.17a8.03 8.03 0 0 1-4.31 5.15c.47-1.55.91-3.29 1.14-5.15Zm0-2c-.23-1.86-.67-3.6-1.14-5.15A8.03 8.03 0 0 1 18.86 11h-3.17Z" />
        </svg>
      );
    }

    if (type === 'twitter') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.6 7.2c.01.2.01.4.01.6 0 6.12-4.66 13.17-13.17 13.17-2.61 0-5.05-.76-7.1-2.08.36.04.71.05 1.08.05 2.17 0 4.16-.74 5.75-1.97-2.03-.04-3.74-1.38-4.33-3.23.28.05.56.08.86.08.4 0 .8-.05 1.17-.16-2.12-.43-3.72-2.32-3.72-4.56v-.06c.63.35 1.35.57 2.11.6a4.57 4.57 0 0 1-2.04-3.8c0-.84.22-1.62.6-2.3a13.13 13.13 0 0 0 9.52 4.83 5.15 5.15 0 0 1-.12-1.04 4.57 4.57 0 0 1 7.91-3.13 9.02 9.02 0 0 0 2.9-1.11 4.56 4.56 0 0 1-2.01 2.52 9.16 9.16 0 0 0 2.63-.72 9.86 9.86 0 0 1-2.29 2.36Z" />
        </svg>
      );
    }

    if (type === 'linkedin') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.98 3.5A2.48 2.48 0 1 1 5 8.46 2.48 2.48 0 0 1 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.09V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.45-2.16 2.96V21h-4V9Z" />
        </svg>
      );
    }

    if (type === 'tiktok') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16.6 2c.1 1.06.58 2.1 1.41 2.94.83.83 1.87 1.31 2.93 1.42v3.12a8.4 8.4 0 0 1-4.24-1.15v5.96c0 3.77-3.06 6.81-6.83 6.81a6.82 6.82 0 0 1-4.58-11.9 6.7 6.7 0 0 1 4.07-1.33v3.25a3.47 3.47 0 0 0-2.48 1.03 3.51 3.51 0 0 0 2.47 5.99c1.94 0 3.53-1.58 3.53-3.53V2h3.72Z" />
        </svg>
      );
    }

    if (type === 'facebook') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 22v-7h2.35l.35-2.72H13.5V10.5c0-.79.22-1.32 1.35-1.32H16V6.75c-.29-.04-1.3-.12-2.47-.12-2.44 0-4.11 1.49-4.11 4.22v2.43H7v2.72h2.42v7h4.08Z" />
        </svg>
      );
    }

    if (type === 'instagram') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 2.75A5.25 5.25 0 1 1 6.75 12 5.26 5.26 0 0 1 12 6.75Zm0 2A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm5.5-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
        </svg>
      );
    }

    return null;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch GitHub user avatars
  useEffect(() => {
    const fetchGitHubProfiles = async () => {
      const usernames = ['Dill1027', 'Dilshani16', 'dilkihewage', 'praweenanuwangee'];
      const profiles = {};

      await Promise.all(usernames.map(async (username) => {
        try {
          const response = await fetch(`https://api.github.com/users/${username}`);
          if (!response.ok) {
            throw new Error(`GitHub request failed for ${username}`);
          }

          const data = await response.json();
          profiles[username] = {
            avatarUrl: data.avatar_url || null,
            name: data.name || username,
            bio: data.bio || 'GitHub profile information is not available.',
            location: data.location || 'Location not listed',
            company: data.company || 'Independent contributor',
            blog: data.blog || '',
            twitterUsername: data.twitter_username || '',
            followers: data.followers ?? 0,
            following: data.following ?? 0,
            publicRepos: data.public_repos ?? 0,
            htmlUrl: data.html_url || `https://github.com/${username}`,
            username
          };
        } catch (error) {
          profiles[username] = {
            avatarUrl: null,
            name: username,
            bio: 'GitHub profile information could not be loaded.',
            location: 'Location not listed',
            company: 'Independent contributor',
            blog: '',
            twitterUsername: '',
            followers: 0,
            following: 0,
            publicRepos: 0,
            htmlUrl: `https://github.com/${username}`,
            username
          };
        }
      }));

      profiles.Dill1027 = {
        ...profiles.Dill1027,
        ...dill1027ProfileOverride,
        avatarUrl: profiles.Dill1027?.avatarUrl || null,
        name: dill1027ProfileOverride.displayName,
        bio: dill1027ProfileOverride.bio,
        location: dill1027ProfileOverride.location,
        company: dill1027ProfileOverride.company,
        followers: dill1027ProfileOverride.followers,
        following: dill1027ProfileOverride.following,
        htmlUrl: profiles.Dill1027?.htmlUrl || 'https://github.com/Dill1027',
        username: dill1027ProfileOverride.username,
        displayName: dill1027ProfileOverride.displayName,
        pronouns: dill1027ProfileOverride.pronouns,
        fullName: dill1027ProfileOverride.fullName,
        linkedinUrl: dill1027ProfileOverride.linkedinUrl,
        facebookUrl: dill1027ProfileOverride.facebookUrl,
        instagramUrl: dill1027ProfileOverride.instagramUrl,
        tiktokUrl: dill1027ProfileOverride.tiktokUrl
      };

      profiles.Dilshani16 = {
        ...profiles.Dilshani16,
        linkedinUrl: dilshani16ProfileOverride.linkedinUrl
      };

      profiles.dilkihewage = {
        ...profiles.dilkihewage,
        linkedinUrl: dilkihewageProfileOverride.linkedinUrl,
        facebookUrl: dilkihewageProfileOverride.facebookUrl,
        instagramUrl: dilkihewageProfileOverride.instagramUrl
      };

      profiles.praweenanuwangee = {
        ...profiles.praweenanuwangee,
        linkedinUrl: praweenanuwangeeProfileOverride.linkedinUrl
      };

      setTeamProfiles(profiles);
    };
    
    fetchGitHubProfiles();
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🚀</span>
            Smart Learn+
          </div>
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#hero" className="nav-link" onClick={() => scrollToSection('hero')}>Home</a>
            <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a>
            <a href="#problem" className="nav-link" onClick={() => scrollToSection('problem')}>Problem</a>
            <a href="#solution" className="nav-link" onClick={() => scrollToSection('solution')}>Solution</a>
            <a href="#modules" className="nav-link" onClick={() => scrollToSection('modules')}>Modules</a>
            <a href="#features" className="nav-link" onClick={() => scrollToSection('features')}>Features</a>
            <a href="#architecture" className="nav-link" onClick={() => scrollToSection('architecture')}>Architecture</a>
            <a href="#methodology" className="nav-link" onClick={() => scrollToSection('methodology')}>Methodology</a>
            <a href="#tech-stack" className="nav-link" onClick={() => scrollToSection('tech-stack')}>Tech Stack</a>
            <a href="#team" className="nav-link" onClick={() => scrollToSection('team')}>Team</a>
            <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">Final Year Research Project</div>
            <h1 className="hero-title">Smart Learn+</h1>
            <h2 className="hero-subtitle">AI-Based Adaptive Learning Platform for Neurodevelopmental Disorders</h2>
            <p className="hero-description">
              An intelligent, multimodal learning platform leveraging AI and adaptive algorithms to support 
              children with dyslexia, dysgraphia, dyscalculia, and working memory challenges. Designed with 
              Sinhala-language support and culturally responsive pedagogy for the Sri Lankan context.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('solution')}>View Project</button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Contact Us</button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
            </div>
          </div>
          <div className="hero-graphic">
            <div className="graphic-card glow-1">
              <span>🧠</span>
            </div>
            <div className="graphic-card glow-2">
              <span>🎮</span>
            </div>
            <div className="graphic-card glow-3">
              <span>📚</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Smart Learn+</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Smart Learn+ is a comprehensive research project developed as part of a final-year IT degree 
                program. It addresses the critical gap in accessible, affordable, and culturally-relevant 
                digital interventions for children with neurodevelopmental disorders in Sri Lanka.
              </p>
              <p>
                The platform combines advances in artificial intelligence, adaptive learning algorithms, and 
                game-based pedagogy to create an engaging, personalized learning experience. Each module is 
                specifically designed to target learning challenges while maintaining child-friendly, interactive interfaces.
              </p>
              <p>
                Built with consideration for low-bandwidth environments, mobile-first design, and Sinhala language 
                support, Smart Learn+ is uniquely suited for deployment across diverse socioeconomic contexts in Sri Lanka.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Disorder Modules</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6-8</div>
                <div className="stat-label">Target Age Group</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">Adaptive Levels</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">🇱🇰</div>
                <div className="stat-label">Sinhala Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="section problem">
        <div className="container">
          <h2 className="section-title">Problem Statement</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">🌐</div>
              <h3>Lack of Sinhala-Based Tools</h3>
              <p>
                Most learning applications are available only in English or other languages. Children with 
                neurodevelopmental disorders in Sri Lanka lack culturally-relevant, mother-tongue interventions.
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💰</div>
              <h3>High Cost of Therapy</h3>
              <p>
                Professional speech, occupational, and learning therapy in Sri Lanka is expensive and inaccessible 
                to most families. Specialist services are concentrated in urban areas, leaving rural communities underserved.
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🔗</div>
              <h3>Lack of Integrated System</h3>
              <p>
                Current solutions address individual disorders in isolation. There's no unified platform that 
                provides comprehensive support across multiple neurodevelopmental challenges with shared progress tracking.
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🤖</div>
              <h3>No Adaptive Learning</h3>
              <p>
                Traditional educational tools use static difficulty levels. Children with learning disorders need 
                systems that adapt in real-time based on performance, engagement, and learning patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section solution">
        <div className="container">
          <h2 className="section-title">Our Solution</h2>
          <div className="solution-intro">
            <p>
              Smart Learn+ is an integrated, adaptive learning platform that combines AI-driven personalization with 
              game-based learning design. It provides affordable, accessible support for children with neurodevelopmental 
              disorders across four primary modules.
            </p>
          </div>
          <div className="solution-features">
            <div className="solution-feature">
              <div className="feature-number">01</div>
              <h3>AI-Powered Adaptation</h3>
              <p>Machine learning algorithms analyze learning patterns and automatically adjust difficulty, pace, and content</p>
            </div>
            <div className="solution-feature">
              <div className="feature-number">02</div>
              <h3>Multimodal Interaction</h3>
              <p>Combines visual, auditory, kinesthetic, and tactile learning modalities for engaging, multisensory experiences</p>
            </div>
            <div className="solution-feature">
              <div className="feature-number">03</div>
              <h3>Comprehensive Progress Tracking</h3>
              <p>Real-time dashboards for parents, educators, and therapists provide actionable insights and recommendations</p>
            </div>
            <div className="solution-feature">
              <div className="feature-number">04</div>
              <h3>Offline Functionality</h3>
              <p>Designed for low-bandwidth environments with offline-first architecture for reliability and accessibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="section modules">
        <div className="container">
          <h2 className="section-title">Four Specialized Modules</h2>
          <div className="modules-grid">
            <div className="module-card">
              <div className="module-icon">📖</div>
              <h3>Dyslexia Module</h3>
              <p className="module-subtitle">Reading & Phonological Awareness</p>
              <p>Targeted activities for phoneme recognition, sight word building, reading fluency, and comprehension with audiovisual support.</p>
            </div>
            <div className="module-card">
              <div className="module-icon">✏️</div>
              <h3>Dysgraphia Module</h3>
              <p className="module-subtitle">Writing & Fine Motor Skills</p>
              <p>Interactive writing activities, letter formation practice, motor control exercises, and progressive composition tasks.</p>
            </div>
            <div className="module-card">
              <div className="module-icon">🔢</div>
              <h3>Dyscalculia Module</h3>
              <p className="module-subtitle">Math & Numerical Reasoning</p>
              <p>Number sense development, counting, magnitude comparison, and foundational arithmetic with multisensory visualization.</p>
            </div>
            <div className="module-card">
              <div className="module-icon">🧩</div>
              <h3>Working Memory Module</h3>
              <p className="module-subtitle">Memory & Attention Exercises</p>
              <p>Cognitive training activities targeting sequential memory, attention span, and working memory capacity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎮</div>
              <h3>Gamified Learning</h3>
              <p>Engaging game mechanics with rewards, achievements, and progress visualization</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI Adaptation</h3>
              <p>Algorithms adjust difficulty and content based on real-time performance data</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎵</div>
              <h3>Sinhala Voice Guidance</h3>
              <p>Native language audio instructions and feedback for better comprehension</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🖐️</div>
              <h3>Multisensory Interface</h3>
              <p>Visual, auditory, and kinesthetic elements engage multiple learning channels</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Progress Dashboard</h3>
              <p>Comprehensive analytics and insights for parents and educators</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Personalized Recommendations</h3>
              <p>AI-generated suggestions for optimal learning paths and intervention strategies</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Offline Mode</h3>
              <p>Works seamlessly in low-bandwidth or offline environments</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Privacy & Security</h3>
              <p>GDPR-compliant data protection with role-based access controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section id="architecture" className="section architecture">
        <div className="container">
          <h2 className="section-title">System Architecture</h2>
          <div className="architecture-diagram">
            <div className="arch-layer">
              <div className="arch-box">
                <div className="arch-icon">📱</div>
                <h4>Frontend Layer</h4>
                <p>React Native Mobile App</p>
              </div>
              <div className="arch-arrow">↓</div>
            </div>
            <div className="arch-layer">
              <div className="arch-box">
                <div className="arch-icon">⚙️</div>
                <h4>API Layer</h4>
                <p>Node.js + Express REST APIs</p>
              </div>
              <div className="arch-arrow">↓</div>
            </div>
            <div className="arch-layer">
              <div className="arch-box">
                <div className="arch-icon">🧠</div>
                <h4>AI & Logic Layer</h4>
                <p>Python ML Models & Algorithms</p>
              </div>
              <div className="arch-arrow">↓</div>
            </div>
            <div className="arch-layer">
              <div className="arch-box">
                <div className="arch-icon">🗄️</div>
                <h4>Data Layer</h4>
                <p>MongoDB / Firebase Database</p>
              </div>
            </div>
          </div>
          <div className="arch-details">
            <div className="detail-box">
              <h4>📱 Frontend</h4>
              <p>React Native for iOS/Android, responsive UI, offline-first design</p>
            </div>
            <div className="detail-box">
              <h4>⚙️ Backend</h4>
              <p>RESTful APIs, user management, data sync, authentication & authorization</p>
            </div>
            <div className="detail-box">
              <h4>🧠 AI Module</h4>
              <p>Adaptive algorithms, performance prediction, content recommendation engine</p>
            </div>
            <div className="detail-box">
              <h4>🗄️ Database</h4>
              <p>User profiles, learning records, content library, progress analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="section methodology">
        <div className="container">
          <h2 className="section-title">Development Methodology</h2>
          <div className="methodology-stages">
            <div className="stage">
              <div className="stage-circle">1</div>
              <h3>Requirement Analysis</h3>
              <p>Literature review on neurodevelopmental disorders, stakeholder interviews with educators and therapists, and definition of functional requirements</p>
            </div>
            <div className="stage">
              <div className="stage-circle">2</div>
              <h3>System Design</h3>
              <p>User-centered design, wireframing, prototyping, system architecture design, and database schema development</p>
            </div>
            <div className="stage">
              <div className="stage-circle">3</div>
              <h3>Development</h3>
              <p>Agile development with frontend, backend, and AI module development in parallel iterations and incremental deployment</p>
            </div>
            <div className="stage">
              <div className="stage-circle">4</div>
              <h3>Testing & Evaluation</h3>
              <p>Unit testing, integration testing, user acceptance testing, and evaluation with target user groups</p>
            </div>
            <div className="stage">
              <div className="stage-circle">5</div>
              <h3>Deployment</h3>
              <p>Production deployment, user training, and ongoing maintenance and updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech-stack" className="section tech-stack">
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">📱</div>
              <h4>Frontend</h4>
              <p>React Native</p>
              <p className="tech-subtitle">Cross-platform mobile development</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">⚙️</div>
              <h4>Backend</h4>
              <p>Node.js + Express.js</p>
              <p className="tech-subtitle">RESTful API server</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🧠</div>
              <h4>AI & ML</h4>
              <p>Python (TensorFlow, scikit-learn)</p>
              <p className="tech-subtitle">Adaptive algorithms</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🗄️</div>
              <h4>Database</h4>
              <p>MongoDB / Firebase</p>
              <p className="tech-subtitle">NoSQL data storage</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">☁️</div>
              <h4>Cloud</h4>
              <p>Firebase / AWS</p>
              <p className="tech-subtitle">Hosting & infrastructure</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🧪</div>
              <h4>Testing</h4>
              <p>Jest, Pytest, Selenium</p>
              <p className="tech-subtitle">Automated testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section team">
        <div className="container">
          <h2 className="section-title">Development Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src={teamProfiles.Dill1027?.avatarUrl || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%230066cc%22 width=%22100%22 height=%22100%22 rx=%2250%22/%3E%3Ctext x=%2250%22 y=%2260%22 font-size=%2250%22 font-weight=%22bold%22 fill=%22white%22 text-anchor=%22middle%22%3EDL%3C/text%3E%3C/svg%3E'} alt="Dill1027" className="team-member-avatar team-avatar-img" />
              <h3 className="team-member-name">{teamProfiles.Dill1027?.displayName || teamProfiles.Dill1027?.name || 'Dill1027'}</h3>
              <p className="team-role">{teamProfiles.Dill1027?.pronouns ? `Dill1027 · ${teamProfiles.Dill1027.pronouns}` : '@Dill1027'}</p>
              <p className="team-description">{teamProfiles.Dill1027?.bio || 'Loading GitHub profile details...'}</p>
              <div className="team-meta">
                <span className="team-meta-item">{teamProfiles.Dill1027?.company || 'Company not listed'}</span>
                <span className="team-meta-item">{teamProfiles.Dill1027?.followers ?? 0} followers</span>
                <span className="team-meta-item">{teamProfiles.Dill1027?.following ?? 0} following</span>
              </div>
              <p className="team-description team-profile-handle">{teamProfiles.Dill1027?.username || 'dill_abeysinghe'}</p>
              <div className="team-social-links" aria-label="Dill1027 social links">
                <a href={teamProfiles.Dill1027?.htmlUrl || 'https://github.com/Dill1027'} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="Dill1027 GitHub profile">
                  {renderSocialIcon('github')}
                </a>
                {teamProfiles.Dill1027?.linkedinUrl ? (
                  <a href={teamProfiles.Dill1027.linkedinUrl} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="Dill1027 LinkedIn profile">
                    {renderSocialIcon('linkedin')}
                  </a>
                ) : null}
                {teamProfiles.Dill1027?.facebookUrl ? (
                  <a href={teamProfiles.Dill1027.facebookUrl} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="Dill1027 Facebook profile">
                    {renderSocialIcon('facebook')}
                  </a>
                ) : null}
                {teamProfiles.Dill1027?.instagramUrl ? (
                  <a href={teamProfiles.Dill1027.instagramUrl} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="Dill1027 Instagram profile">
                    {renderSocialIcon('instagram')}
                  </a>
                ) : null}
                {teamProfiles.Dill1027?.tiktokUrl ? (
                  <a href={teamProfiles.Dill1027.tiktokUrl} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="Dill1027 TikTok profile">
                    {renderSocialIcon('tiktok')}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="team-card">
              <img src={teamProfiles.Dilshani16?.avatarUrl || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%230066cc%22 width=%22100%22 height=%22100%22 rx=%2250%22/%3E%3Ctext x=%2250%22 y=%2260%22 font-size=%2250%22 font-weight=%22bold%22 fill=%22white%22 text-anchor=%22middle%22%3EDI%3C/text%3E%3C/svg%3E'} alt="Dilshani16" className="team-member-avatar team-avatar-img" />
              <h3 className="team-member-name">{teamProfiles.Dilshani16?.name || 'Dilshani16'}</h3>
              <p className="team-role">@Dilshani16</p>
              <p className="team-description">{teamProfiles.Dilshani16?.bio || 'Loading GitHub profile details...'}</p>
              <div className="team-meta">
                <span className="team-meta-item">{teamProfiles.Dilshani16?.location || 'Location not listed'}</span>
                <span className="team-meta-item">{teamProfiles.Dilshani16?.followers ?? 0} followers</span>
              </div>
              <div className="team-social-links" aria-label="Dilshani16 social links">
                <a href={teamProfiles.Dilshani16?.htmlUrl || 'https://github.com/Dilshani16'} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="Dilshani16 GitHub profile">
                  {renderSocialIcon('github')}
                </a>
                {teamProfiles.Dilshani16?.linkedinUrl ? (
                  <a href={teamProfiles.Dilshani16.linkedinUrl} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="Dilshani16 LinkedIn profile">
                    {renderSocialIcon('linkedin')}
                  </a>
                ) : null}
                {teamProfiles.Dilshani16?.blog ? (
                  <a href={teamProfiles.Dilshani16.blog} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="Dilshani16 website">
                    {renderSocialIcon('website')}
                  </a>
                ) : null}
                {teamProfiles.Dilshani16?.twitterUsername ? (
                  <a href={`https://x.com/${teamProfiles.Dilshani16.twitterUsername}`} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="Dilshani16 X profile">
                    {renderSocialIcon('twitter')}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="team-card">
              <img src={teamProfiles.dilkihewage?.avatarUrl || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%230066cc%22 width=%22100%22 height=%22100%22 rx=%2250%22/%3E%3Ctext x=%2250%22 y=%2260%22 font-size=%2250%22 font-weight=%22bold%22 fill=%22white%22 text-anchor=%22middle%22%3EDK%3C/text%3E%3C/svg%3E'} alt="dilkihewage" className="team-member-avatar team-avatar-img" />
              <h3 className="team-member-name">{teamProfiles.dilkihewage?.name || 'dilkihewage'}</h3>
              <p className="team-role">@dilkihewage</p>
              <p className="team-description">{teamProfiles.dilkihewage?.bio || 'Loading GitHub profile details...'}</p>
              <div className="team-meta">
                <span className="team-meta-item">{teamProfiles.dilkihewage?.company || 'Company not listed'}</span>
                <span className="team-meta-item">{teamProfiles.dilkihewage?.publicRepos ?? 0} repos</span>
              </div>
              <div className="team-social-links" aria-label="dilkihewage social links">
                <a href={teamProfiles.dilkihewage?.htmlUrl || 'https://github.com/dilkihewage'} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="dilkihewage GitHub profile">
                  {renderSocialIcon('github')}
                </a>
                {teamProfiles.dilkihewage?.linkedinUrl ? (
                  <a href={teamProfiles.dilkihewage.linkedinUrl} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="dilkihewage LinkedIn profile">
                    {renderSocialIcon('linkedin')}
                  </a>
                ) : null}
                {teamProfiles.dilkihewage?.facebookUrl ? (
                  <a href={teamProfiles.dilkihewage.facebookUrl} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="dilkihewage Facebook profile">
                    {renderSocialIcon('facebook')}
                  </a>
                ) : null}
                {teamProfiles.dilkihewage?.instagramUrl ? (
                  <a href={teamProfiles.dilkihewage.instagramUrl} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="dilkihewage Instagram profile">
                    {renderSocialIcon('instagram')}
                  </a>
                ) : null}
                {teamProfiles.dilkihewage?.blog ? (
                  <a href={teamProfiles.dilkihewage.blog} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="dilkihewage website">
                    {renderSocialIcon('website')}
                  </a>
                ) : null}
                {teamProfiles.dilkihewage?.twitterUsername ? (
                  <a href={`https://x.com/${teamProfiles.dilkihewage.twitterUsername}`} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="dilkihewage X profile">
                    {renderSocialIcon('twitter')}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="team-card">
              <img src={teamProfiles.praweenanuwangee?.avatarUrl || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%230066cc%22 width=%22100%22 height=%22100%22 rx=%2250%22/%3E%3Ctext x=%2250%22 y=%2260%22 font-size=%2250%22 font-weight=%22bold%22 fill=%22white%22 text-anchor=%22middle%22%3EPR%3C/text%3E%3C/svg%3E'} alt="praweenanuwangee" className="team-member-avatar team-avatar-img" />
              <h3 className="team-member-name">{teamProfiles.praweenanuwangee?.name || 'praweenanuwangee'}</h3>
              <p className="team-role">@praweenanuwangee</p>
              <p className="team-description">{teamProfiles.praweenanuwangee?.bio || 'Loading GitHub profile details...'}</p>
              <div className="team-meta">
                <span className="team-meta-item">{teamProfiles.praweenanuwangee?.location || 'Location not listed'}</span>
                <span className="team-meta-item">{teamProfiles.praweenanuwangee?.publicRepos ?? 0} repos</span>
              </div>
              <div className="team-social-links" aria-label="praweenanuwangee social links">
                <a href={teamProfiles.praweenanuwangee?.htmlUrl || 'https://github.com/praweenanuwangee'} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="praweenanuwangee GitHub profile">
                  {renderSocialIcon('github')}
                </a>
                {teamProfiles.praweenanuwangee?.linkedinUrl ? (
                  <a href={teamProfiles.praweenanuwangee.linkedinUrl} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="praweenanuwangee LinkedIn profile">
                    {renderSocialIcon('linkedin')}
                  </a>
                ) : null}
                {teamProfiles.praweenanuwangee?.blog ? (
                  <a href={teamProfiles.praweenanuwangee.blog} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="praweenanuwangee website">
                    {renderSocialIcon('website')}
                  </a>
                ) : null}
                {teamProfiles.praweenanuwangee?.twitterUsername ? (
                  <a href={`https://x.com/${teamProfiles.praweenanuwangee.twitterUsername}`} target="_blank" rel="noopener noreferrer" className="team-social-link" aria-label="praweenanuwangee X profile">
                    {renderSocialIcon('twitter')}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Contact & Resources</h2>
          <div className="contact-info">
            <div className="contact-card">
              <h3>🏫 Institution</h3>
              <p>Sri Lanka Institute of Information Technology (SLIIT)</p>
              <p className="text-muted">Department of Information Technology</p>
            </div>
            <div className="contact-card">
              <h3>👨‍🏫 Project Supervisor</h3>
              <p>[Supervisor Name]</p>
              <p className="text-muted">[Supervisor Email]</p>
              <p className="text-muted">[Contact Number]</p>
            </div>
            <div className="contact-card">
              <h3>💻 GitHub Repository</h3>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                github.com/smartlearn/project
              </a>
              <p className="text-muted">Full source code and documentation</p>
            </div>
            <div className="contact-card">
              <h3>📧 Project Email</h3>
              <p><a href="mailto:smartlearn@sliit.lk" className="contact-link">smartlearn@sliit.lk</a></p>
              <p className="text-muted">For inquiries and collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Smart Learn+ | AI-Based Adaptive Learning Platform | SLIIT Final Year Project</p>
          <p className="footer-subtitle">Empowering children with neurodevelopmental disorders through accessible, adaptive, culturally-relevant technology</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
