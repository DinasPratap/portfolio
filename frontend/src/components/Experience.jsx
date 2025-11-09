import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Users, Code, BookOpen } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Founder & CEO',
      company: 'Reputation DAO',
      type: 'Full-time',
      location: 'Remote',
      period: 'July 2025 - Present',
      duration: '4+ months',
      description: 'Founded and leading Reputation DAO, a decentralized governance platform that won 1st place at WCHL 2025 Global Hackathon. Building identity-weighted voting systems and decentralized governance infrastructure.',
      achievements: [
        'Won 1st place and $2,000 prize at WCHL 2025 Global Hackathon (India Funnel)',
        'Designed and implemented identity-weighted voting mechanism',
        'Building decentralized governance systems for Web3 communities',
        'Leading product development and strategic partnerships'
      ],
      skills: ['DAO Development', 'Governance Systems', 'Leadership', 'Web3', 'Product Strategy'],
      icon: Users,
      color: '#667eea',
      current: true,
      website: 'https://reputationdao.com'
    },
    {
      title: 'Trader & Portfolio Manager',
      company: 'Self-Employed',
      type: 'Full-time',
      location: 'Remote',
      period: '2020 - Present',
      duration: '4+ years',
      description: 'Managing diversified portfolios across cryptocurrency and forex markets with focus on real-time execution and risk management strategies.',
      achievements: [
        'Achieved consistent profitability across multiple market cycles',
        'Developed proprietary trading algorithms and risk management systems',
        'Successfully passed prop-firm evaluation with 92% success rate',
        'Managed portfolio through major market events (COVID-19, crypto winters)'
      ],
      skills: ['Forex Trading', 'Crypto Trading', 'Risk Management', 'Technical Analysis', 'Portfolio Management'],
      icon: TrendingUp,
      color: '#ffd700',
      current: true
    },
    {
      title: 'Marketing & Tokenomics Consultant',
      company: 'DeFi/DeSci Projects',
      type: 'Freelance',
      location: 'Remote',
      period: '2023 - Present',
      duration: '2+ years',
      description: 'Providing strategic guidance for token launches, ecosystem design, and community growth for various DeFi and DeSci projects.',
      achievements: [
        'Successfully launched 5+ token projects with combined market cap of $50M+',
        'Designed tokenomics models for sustainable ecosystem growth',
        'Implemented marketing strategies resulting in 300%+ community growth',
        'Consulted on governance models and DAO structures'
      ],
      skills: ['Tokenomics', 'Marketing Strategy', 'Community Management', 'DeFi', 'Ecosystem Design'],
      icon: Users,
      color: '#00ff88',
      current: true
    },
    {
      title: 'Blockchain Developer',
      company: 'Open Source Contributions',
      type: 'Part-time',
      location: 'Remote',
      period: '2022 - Present',
      duration: '2+ years',
      description: 'Contributing to various Web3 projects, maintaining documentation, fixing bugs, and developing new features for decentralized applications.',
      achievements: [
        'Contributed to open source blockchain projects',
        'Fixed critical security vulnerabilities in smart contracts',
        'Authored comprehensive Web3 development documentation',
        'Developed and deployed multiple DApps on Ethereum and Internet Computer'
  
      ],
      skills: ['Solidity', 'Web3.js', 'Smart Contracts', 'DApp Development', 'Code Review'],
      icon: Code,
      color: '#4ecdc4',
      current: true
    },
    {
      title: 'Community Moderator',
      company: 'Crypto Education Communities',
      type: 'Volunteer',
      location: 'Remote',
      period: '2021 - 2023',
      duration: '2 years',
      description: 'Moderated educational crypto communities, organized learning sessions, and helped newcomers understand blockchain technology.',
      achievements: [
        'Moderated communities with 10,000+ active members',
        'Established mentorship programs'
      ],
      skills: ['Community Management', 'Education', 'Content Creation', 'Leadership', 'Communication'],
      icon: BookOpen,
      color: '#ff6b6b',
      current: false
    }
  ];

  const education = {
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'Thapar Institute of Engineering & Technology',
    period: '2024 - 2028',
    status: 'Current Student',
    location: 'Patiala, India',
    highlights: [
      'Specializing in blockchain technology and distributed systems',
      'Active member of coding and entrepreneurship clubs',
      'Participating in hackathons and tech competitions',
      'Maintaining academic excellence while building industry experience'
    ]
  };

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Experience & Education</h2>
          <p className="section-subtitle">
            A journey through blockchain development, financial trading, and continuous learning
          </p>
        </motion.div>

        <div className="experience-content">
          {/* Work Experience */}
          <motion.div
            className="experience-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="section-title">Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className={`timeline-item ${exp.current ? 'current' : ''}`}
                  variants={itemVariants}
                >
                  <div className="timeline-marker">
                    <div className="timeline-icon" style={{ color: exp.color }}>
                      <exp.icon size={20} />
                    </div>
                  </div>
                  
                  <div className="timeline-content">
                    <div className="experience-card">
                      <div className="experience-header">
                        <div className="experience-title">
                          <h4>{exp.title}</h4>
                          {exp.current && <span className="current-badge">Current</span>}
                        </div>
                        <div className="experience-company">
                          {exp.website ? (
                            <a href={exp.website} target="_blank" rel="noopener noreferrer" className="company-link">
                              <span className="company">{exp.company}</span>
                            </a>
                          ) : (
                            <span className="company">{exp.company}</span>
                          )}
                          <span className="type">{exp.type}</span>
                        </div>
                        <div className="experience-meta">
                          <div className="meta-item">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="meta-item">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="experience-description">{exp.description}</p>

                      <div className="achievements">
                        <h5>Key Achievements:</h5>
                        <ul>
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="experience-skills">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag" style={{ borderColor: exp.color }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="education-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="section-title">Education</h3>
            <div className="education-card">
              <div className="education-header">
                <div className="education-icon">
                  <BookOpen size={28} />
                </div>
                <div className="education-info">
                  <h4>{education.degree}</h4>
                  <p className="institution">{education.institution}</p>
                  <div className="education-meta">
                    <span className="period">{education.period}</span>
                    <span className="status">{education.status}</span>
                    <span className="location">{education.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="education-highlights">
                <h5>Highlights:</h5>
                <ul>
                  {education.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
