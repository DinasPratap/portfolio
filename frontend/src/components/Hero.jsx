import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Send, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="gradient-text">Dinas</span><br />
              <span className="text-primary">Pratap Singh</span>
            </motion.h1>
            
            <motion.div
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2>Expert Blockchain Developer</h2>
              <h2 className="text-accent">&</h2>
              <h2>Professional Crypto Trader</h2>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Professional Web3 developer and certified financial market trader with 4+ years of proven experience in 
              cryptocurrency markets and forex trading. Specializing in secure smart contract development using Solidity and Motoko, 
              DeFi/DeSci protocol development, NFT creation, and decentralized governance systems. Expert in blockchain security, 
              risk management, and algorithmic trading strategies.
            </motion.p>

            {/* SEO-friendly keyword section */}
            <motion.div
              className="hero-keywords"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
            >
              <p>
                Dinas blockchain developer crypto trader Web3 expert DeFi developer smart contract Solidity Motoko 
                cryptocurrency expert prop-firm trader blockchain consultant NFT developer DApp development 
                financial markets trading forex trading algorithmic trading blockchain security decentralized finance 
                Web3 portfolio crypto portfolio trading strategies risk management technical analysis
              </p>
            </motion.div>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#contact" className="btn btn-primary" aria-label="Contact Dinas for blockchain development projects">
                <Mail size={20} />
                Hire for Blockchain Projects
              </a>
              <a href="#projects" className="btn btn-secondary" aria-label="View Dinas's blockchain and crypto trading projects">
                View Portfolio
              </a>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a 
                href="https://github.com/RadicalUser" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="Visit Dinas Pratap Singh's GitHub profile"
                title="GitHub - Blockchain Projects"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:dinaspratap5629@gmail.com" 
                className="social-link"
                aria-label="Contact Dinas via email"
                title="Email - Business Inquiries"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://t.me/DinasPratap" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="Message Dinas on Telegram"
                title="Telegram - Quick Contact"
              >
                <Send size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-text">DPS</span>
              </div>
              <div className="avatar-glow"></div>
            </div>
            
            <div className="floating-elements">
              <motion.div
                className="floating-element blockchain"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                ⛓️
              </motion.div>
              <motion.div
                className="floating-element trading"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                📈
              </motion.div>
              <motion.div
                className="floating-element code"
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                💻
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="scroll-indicator"
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ y: -5 }}
        >
          <ArrowDown size={24} />
          <span>Scroll to explore</span>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
