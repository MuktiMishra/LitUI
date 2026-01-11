import React, { useState, useEffect } from 'react';
import { Sparkles, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { 
      icon: Twitter, 
      href: 'https://x.com/MuktiMishra6',
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/mukti-mishra-38379b229',
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    { 
      icon: Github, 
      href: 'https://github.com/muktimishra',
      label: 'GitHub',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <>
      <header 
        className="fixed mb-2 top-0 left-0 right-0 z-50
                   bg-slate-950/80 backdrop-blur-xl
                   border-b border-purple-500/20
                   shadow-lg shadow-purple-500/5
                   transition-all duration-500"
       >

        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="/" 
              className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <Sparkles className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 blur-lg bg-purple-400/30 group-hover:bg-pink-400/30 transition-colors duration-300 opacity-0 group-hover:opacity-100" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                LitUI
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {/* Author Credit */}
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full">
                <span className="text-sm text-slate-400">by</span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Mukti Mishra
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`group relative p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-current transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-xl blur-md bg-purple-400/0 group-hover:bg-purple-400/20 transition-all duration-300" />
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#docs"
                className="group relative px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-300" />
              ) : (
                <Menu className="w-6 h-6 text-slate-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
              mobileMenuOpen 
                ? 'max-h-96 opacity-100 mt-6' 
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-4 pb-4">
              {/* Author Credit Mobile */}
              <div className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl">
                <span className="text-sm text-slate-400">Created by</span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Mukti Mishra
                </span>
              </div>

              {/* Social Links Mobile */}
              <div className="flex items-center justify-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`group relative p-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 text-slate-400 group-hover:text-current transition-colors duration-300" />
                  </a>
                ))}
              </div>

              {/* CTA Button Mobile */}
              <a
                href="#docs"
                className="block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </header>

      
    </>
  );
}