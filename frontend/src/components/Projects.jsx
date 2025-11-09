import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Award, Users, Zap, Shield, Mail } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Guardient',
      subtitle: 'Blockchain Security Tool',
      description: 'A revolutionary blockchain security tool that detects phishing transactions and automatically self-destructs wallet interactions. Combines on-chain pattern analysis with adversarial simulation to protect users from malicious contracts.',
      image: '/api/placeholder/600/400',
      tags: ['Solidity', 'Web3.js', 'Security', 'Pattern Analysis'],
      features: [
        'Real-time phishing detection',
        'Automatic wallet protection',
        'On-chain pattern analysis',
        'Adversarial simulation'
      ],
      award: 'Most Innovative Project - Hackspire 2025',
      teamSize: '4 members',
      duration: '36 hours',
      links: {
        github: 'https://github.com/RadicalUser/guardient',
        live: '#'
      },
      status: 'completed',
      highlight: true
    },
    {
      title: 'Reputation DAO',
      subtitle: 'Decentralized Governance System',
      description: 'A cutting-edge decentralized governance system driven by user reputation and on-chain behavior. Features identity-weighted voting to combat sybil attacks and enable fair trustless coordination.',
      image: '/api/placeholder/600/400',
      tags: ['Solidity', 'DAO', 'Governance', 'DeFi'],
      features: [
        'Identity-weighted voting',
        'Sybil attack prevention',
        'Reputation scoring',
        'Trustless coordination'
      ],
      award: '1st Place - WCHL 2025 Global Hackathon(India Funnel)',
      teamSize: '2 members',
      duration: 'Completed',
      links: {
        github: 'https://github.com/Reputation-DAO/Reputation-DAO',
        live: 'https://reputationdao.com'
      },
      status: 'completed',
      highlight: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of innovative blockchain solutions, trading systems, and decentralized applications
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.highlight ? 'highlight' : ''} ${project.status}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.highlight && (
                <div className="project-badge">
                  <Award size={16} />
                  Featured
                </div>
              )}

              {project.award && (
                <div className="award-banner">
                  <span>{project.award}</span>
                </div>
              )}

              <div className="project-image">
                <div className="image-placeholder">
                  <div className="project-icon">
                    {project.title === 'Guardient' ? <Shield size={40} /> : 
                     project.title === 'Reputation DAO' ? <Users size={40} /> :
                     <Zap size={40} />}
                  </div>
                </div>
                <div className="project-status">
                  <span className={`status-indicator ${project.status}`}>
                    {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-meta">
                  <div className="meta-item">
                    <Users size={16} />
                    <span>{project.teamSize}</span>
                  </div>
                  <div className="meta-item">
                    <span className="duration">{project.duration}</span>
                  </div>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      className="project-link primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Interested in collaboration?</h3>
          <p>I'm always open to discussing new projects and opportunities in the Web3 space.</p>
          <a href="#contact" className="btn btn-primary">
            <Mail size={20} />
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
