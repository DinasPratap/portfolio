import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, FileText, Github, Linkedin, X, FolderOpen, Briefcase } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //All things in navbar nigga :)

  const navItems = [
    { icon: Home, href: '#home', label: 'Home' },
    { icon: FileText, href: '#about', label: 'About' },
    { icon: FolderOpen, href: '#projects', label: 'Projects' },
    { icon: Briefcase, href: '#experience', label: 'Experience' },
    { icon: Github, href: 'https://github.com/DinasPratap', label: 'GitHub', external: true },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dinas-pratap-singh-chhatwal-0b0ba5342/', label: 'LinkedIn', external: true },
    { icon: X, href: 'https://twitter.com/blitzonsarms', label: 'X (Twitter)', external: true }
  ];

  const handleNavClick = (href, external) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <motion.div
          className="nav-pills"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              className="nav-pill"
              onClick={() => handleNavClick(item.href, item.external)}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(0, 255, 136, 0.1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 + 0.3,
                ease: "easeOut"
              }}
            >
              <item.icon size={20} />
              <span className="nav-tooltip">{item.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
