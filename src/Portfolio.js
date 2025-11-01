import React, { useState, useEffect } from 'react';
import './index.css';
import adsLogo from './assets/ADS-removebg-preview.png';
import sc from './assets/SC.jpg';
import SDU from './assets/SDU-removebg-preview.png';
import llm from './assets/LLM&chips.png';
import MH from './assets/Muhammad.jpg';
import PT from './assets/Patrik.jpg';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animationMode, setAnimationMode] = useState('3d');
  const [clickedCard, setClickedCard] = useState(null);

  useEffect(() => {
    // Enhanced scroll animations
    const animateOnScroll = () => {
      const researcherCards = document.querySelectorAll('.researcher-card');
      const areaCards = document.querySelectorAll('.area-card');
      const publicationItems = document.querySelectorAll('.publication-item');
      
      researcherCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if(cardTop < windowHeight * 0.85) {
          card.classList.add('animate');
        }
      });
      
      areaCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if(cardTop < windowHeight * 0.85) {
          card.classList.add('animate');
        }
      });
      
      publicationItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if(itemTop < windowHeight * 0.85) {
          item.classList.add('animate');
        }
      });
    };

    // Initial animation check
    animateOnScroll();

    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);

    // Add scroll effect to header
    const handleScroll = () => {
      const header = document.querySelector('header');
      if(window.scrollY > 100) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCardClick = (cardId) => {
    setClickedCard(cardId);
    setTimeout(() => setClickedCard(null), 600);
  };

  const toggleAnimationMode = () => {
    setAnimationMode(animationMode === '3d' ? '2d' : '3d');
  };

  const smoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  // Researcher data
  const researchers = [
    {
      id: 1,
      name: "Dr. Benaoumeur Senouci",
      title: "Associate Professor, SDU Mechatronics (CIM)",
      image: sc
    },
    {
      id: 2,
      name: " Muhammad Saqib Saeed.",
      title: "PhD Student",
      image: MH
    },
    {
      id: 3,
      name: "Patrik Drazic",
      title: "Research Engineer",
      image: PT
    }
  ];

  return (
    <div className="portfolio">
      {/* Header */}
      <header>
        <div className="container nav-container">
          <div className="logo">
            <div className="logo-image">
              <img src={adsLogo} alt="ADS logo" />
            </div>
              <div className="logo-text">
             <div className="lab-name">Agentic Design Synthesis Lab</div>
              <div className="university-name">University of Southern Denmark</div>
              </div>
          </div>
          <div className="mobile-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); smoothScroll('#home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); smoothScroll('#about'); }}>About</a></li>
            <li><a href="#researchers" onClick={(e) => { e.preventDefault(); smoothScroll('#researchers'); }}>Researchers</a></li>
            <li><a href="#research" onClick={(e) => { e.preventDefault(); smoothScroll('#research'); }}>Research Areas</a></li>
            <li><a href="#publications" onClick={(e) => { e.preventDefault(); smoothScroll('#publications'); }}>Publications</a></li>
            <li><a href="https://github.com/NOKHAB-Lab/LLM4VHDL" target="_blank" rel="noopener noreferrer" className="github-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Innovative Research for a Better Future</h1>
            <p>The Agentic Design Synthesis Lab explores the use of agentic LLMs to enhance creativity and design innovation. It focuses on developing systems that can reason, plan, and collaborate with humans to generate intelligent and adaptive design solutions.</p>
            <a href="#research" className="btn" onClick={(e) => { e.preventDefault(); smoothScroll('#research'); }}>
              Explore Our Research
            </a>
          </div>
        </div>
        
        {/* 3D Researchers Cube Animation */}
        <div className="animation-container">
          <div className="scene">
            <div className="researchers-cube">
              
              <div className="cube-face cube-face-4">
                <div className="lab-logo-cube">
                  <img src={adsLogo} alt="ADS Lab" />
                  
                </div>
              </div>
              <div className="cube-face cube-face-2">
                <div className="lab-logo-cube">
                  <img src={SDU} alt="SDU UNIVERSITY" />
                 
                </div>
              </div>
               <div className="cube-face cube-face-3">
                <div className="lab-logo-cube">
                  <img src={llm} alt="llm" />
         
                </div>
              </div>
             
              
            </div>
          </div>
        </div>
        
        {/* 2D Animation */}
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-bg-animation"></div>
        <div className="container">
          <div className="section-title">
            <h2>About Our Lab</h2>
            <p>Learn about our mission, vision, and approach</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>The Agentic Design Synthesis Lab is dedicated to advancing the field of computational creativity through the development of agentic large language models (LLMs). Our research focuses on creating systems that can reason, plan, and collaborate with human designers to generate innovative and adaptive design solutions.</p>
              <p>We combine cutting-edge AI research with practical design applications, working at the intersection of computer science, cognitive science, and design theory. Our interdisciplinary approach allows us to tackle complex problems in creative domains and develop tools that enhance human creativity rather than replace it.</p>
            </div>
            <div className="about-image">
              <img src={adsLogo} alt="Research Lab" />
            </div>
          </div>
        </div>
      </section>

      {/* Researchers Section */}
      <section className="researchers" id="researchers">
        <div className="researchers-bg-animation"></div>
        <div className="container">
          <div className="section-title">
            <h2>Our Researchers</h2>
            <p>Meet the brilliant minds behind our innovative research</p>
          </div>
          <div className="researchers-grid">
            {researchers.map((researcher) => (
              <div 
                key={researcher.id}
                className={`researcher-card ${animationMode === '3d' ? 'researcher-card-3d' : ''} `}
                
              >
                <div className="researcher-image">
                  <img src={researcher.image} alt={researcher.name} />
                </div>
                <div className="researcher-info">
                  <h3>{researcher.name}</h3>
                  <p className="title">{researcher.title}</p>
                  <p>{researcher.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="research-areas" id="research">
        <div className="container">
          <div className="section-title">
            <h2>Research Areas</h2>
            <p>Exploring diverse fields to drive innovation</p>
          </div>
          <div className="areas-grid">
            {[
               {
    title: "LLM Based Design",
    description: " Leveraging Large Language Models to create AI agents that can autonomously reason, plan, and execute complex design tasks."
  },
  {
    title: "HW/SW Embedded AI",
    description: "Developing specialized hardware and software to run AI models directly on devices, enabling efficient and intelligent systems at the edge." 
  },
  {
    title: "Robotics and Autonomous Vehicles", 
    description: "Building intelligent systems that integrate sensors, data, and adaptive behaviors to enable machines to operate and navigate independently in the physical world.   "
  },
  {
    title: "AI on chip",
    description: "refers to integrating specialized hardware directly onto a microchip to accelerate artificial intelligence tasks. "
  }
            ].map((area, index) => (
              <div 
                key={index}
                className={`area-card ${clickedCard === `area-${index}` ? 'click-animation' : ''}`}
                onClick={() => handleCardClick(`area-${index}`)}
              >
                <div className="area-icon">
                  {area.title.charAt(0)}
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="publications" id="publications">
        <div className="container">
          <div className="section-title">
            <h2>Recent Publications</h2>
            <p>Our latest contributions to scientific literature</p>
          </div>
          <div className="publications-list">
            {[
              {
                title: "Estimation of the fuel consumption in autonomous vehicles using machine learning techniques",
                meta: "2025",
                authors: "Ghazli Abdelkader, Senouci M. Benaoumeur, Abid Dhiya Eddine, Bouache Mourad"
              },
              {
                title: "Platform Based DL Applications Design: Autonomous Vehicles Case Study",
                meta: " 2025",
                authors: "Aly Allam, Benaoumeur Senouci"
              },
              {
                title: "Fast prototyping of Quantized neural networks on an FPGA edge computing device with Brevitas and FINN",
                meta: "2024",
                authors: "Devansh Chawda, Benaoumeur Senouci"
              }
            ].map((pub, index) => (
              <div 
                key={index} 
                className="publication-item"
             
              >
                <h3>{pub.title}</h3>
                <div className="publication-meta">{pub.meta}</div>
                <p>{pub.authors}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">
                <div className="logo-image2">
                  <img src={SDU} alt="SDU LOGO APP" />
                </div>
<div className="logo-text" style={{ color: "#ffffff" }}>
  Southern Denmark University
</div>              </div>
              <div className="social-links">
               <a href="https://github.com/NOKHAB-Lab/LLM4VHDL" target="_blank" rel="noopener noreferrer" className="github-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); smoothScroll('#home'); }}>Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); smoothScroll('#about'); }}>About</a></li>
                <li><a href="#researchers" onClick={(e) => { e.preventDefault(); smoothScroll('#researchers'); }}>Researchers</a></li>
                <li><a href="#research" onClick={(e) => { e.preventDefault(); smoothScroll('#research'); }}>Research Areas</a></li>
                <li><a href="#publications" onClick={(e) => { e.preventDefault(); smoothScroll('#publications'); }}>Publications</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Research Areas</h4>
              <ul>
                <li><a href="#">LLM Based Design</a></li>
                <li><a href="#">HW/SW Embedded AI</a></li>
                <li><a href="#">Robotics and Autonomous Vehicles</a></li>
                <li><a href="#">AI on chip</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;