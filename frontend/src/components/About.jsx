import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '4+', icon: Calendar },
    { label: 'Projects Completed', value: '50+', icon: Award },
    { label: 'Technologies', value: '15+', icon: GraduationCap },
    { label: 'Certifications', value: '3', icon: Award }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">About Me</h2>
          <p className="section-subtitle">
            Passionate about building the future of decentralized finance and trading systems
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about-card" variants={itemVariants}>
              <h3>Who is Dinas Pratap Singh</h3>
              <p>
                I'm Dinas Pratap Singh, a dedicated Web3 blockchain developer and professional cryptocurrency trader 
                based in India. With over 4 years of hands-on experience in cryptocurrency markets, forex trading, 
                and blockchain development, I've established myself as a trusted expert in the decentralized finance (DeFi) 
                ecosystem. My expertise spans smart contract development, crypto trading strategies, and blockchain security consulting.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={itemVariants}>
              <h3>Blockchain Development Expertise</h3>
              <p>
                As a professional blockchain developer, I specialize in secure smart contract development using Solidity 
                and Motoko programming languages. My proven contributions include DeFi/DeSci token launches, NFT marketplace 
                development, decentralized autonomous organization (DAO) systems, and community-driven blockchain ecosystems. 
                I focus on building scalable, secure, and user-centric decentralized applications (DApps).
              </p>
            </motion.div>

            <motion.div className="about-card" variants={itemVariants}>
              <h3>Cryptocurrency Trading & Financial Markets</h3>
              <p>
                As a prop-firm certified forex trader and experienced cryptocurrency trader, I combine rigorous technical 
                development skills with real-world financial market expertise. My approach integrates blockchain technology 
                with advanced trading strategies, risk management frameworks, and algorithmic trading systems. This unique 
                combination allows me to build robust decentralized financial systems that understand market dynamics.
              </p>
            </motion.div>

            <motion.div className="personal-info" variants={itemVariants}>
              <div className="info-item">
                <GraduationCap className="info-icon" />
                <div>
                  <h4>Education</h4>
                  <p>B.E. Computer Engineering</p>
                  <span>Thapar Institute of Engineering & Technology</span>
                </div>
              </div>
              
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>India</p>
                  <span>Available for remote work</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="stat-icon" />
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="achievements"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Recent Achievements</h3>
          <div className="achievement-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>Most Innovative Project</h4>
                <p>Hackspire 2025 - Guardient</p>
                <span>Blockchain security tool built in 36 hours</span>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">📜</div>
              <div className="achievement-content">
                <h4>Prop-Firm Certified</h4>
                <p>Forex Trader (2024)</p>
                <span>Professional trading certification</span>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">🔗</div>
              <div className="achievement-content">
                <h4>Blockchain Fundamentals</h4>
                <p>Workshop Completion (2023)</p>
                <span>Advanced blockchain technologies</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
