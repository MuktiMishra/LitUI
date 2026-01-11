import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Code2, Zap, Heart, Copy, Check, Github, Linkedin, Twitter } from 'lucide-react';
import Header from './Header';

export default function Homepage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('npx litui add button');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const showToastDemo = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div>
    <Header />
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-slate-100">
      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Background Orbs */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePos.x * 100}%`,
            top: `${mousePos.y * 100}%`,
            transform: `translate(-50%, -50%) scale(${1 + mousePos.y * 0.3})`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            right: `${(1 - mousePos.x) * 100}%`,
            bottom: `${(1 - mousePos.y) * 100}%`,
            transform: `translate(50%, 50%) scale(${1 + mousePos.x * 0.2})`
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-4">
          {/* Logo/Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-purple-300 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <Sparkles className="w-4 h-4" />
            <span>Motion-first React components</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent animate-gradient">
              Components that
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              feel alive
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            UI components with built-in personality. Every hover, click, and transition feels intentional. 
            Copy, paste, and make them yours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Read Documentation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl font-medium text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
              <span className="flex items-center gap-2">
                Browse Components
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Floating Animation Cards */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Zap, text: 'Instant animations', delay: 0 },
              { icon: Code2, text: 'Full ownership', delay: 100 },
              { icon: Heart, text: 'Lovingly crafted', delay: 200 }
            ].map((item, i) => (
              <div
                key={i}
                className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <item.icon className="w-6 h-6 mx-auto mb-2 text-purple-300 group-hover:text-pink-300 transition-colors duration-300 group-hover:scale-110" />
                <p className="text-sm text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-32 px-6 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Motion is not an afterthought
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Every component in LitUI has personality baked in. Smooth springs, gentle eases, and delightful micro-interactions that make your UI feel premium by default.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-purple-200">Motion-first</h3>
              <p className="text-slate-400 leading-relaxed">
                Every interaction feels intentional. Hovers, clicks, and focus states have carefully tuned animations that respond to user input.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-3xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 hover:border-pink-400/40 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold text-pink-200">Fully yours</h3>
              <p className="text-slate-400 leading-relaxed">
                Copy-paste components directly into your codebase. Tweak styles, modify behavior, or strip out animations. No package lock-in, ever.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-purple-200">Built with taste</h3>
              <p className="text-slate-400 leading-relaxed">
                Every detail matters. Rounded corners, soft shadows, gradient accents, and spring physics tuned to feel just right.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Component Showcase */}
      <div className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              See them in action
            </h2>
            <p className="text-xl text-slate-400">
              Hover, click, and feel the difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Animated Buttons */}
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 space-y-4 hover:border-purple-400/30 transition-all duration-500">
              <h3 className="text-xl font-semibold text-purple-200 mb-6">Magnetic Buttons</h3>
              <div className="space-y-4">
                <button className="group relative w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/30">
                  <span className="relative z-10">Primary Action</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
                <button className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl font-medium hover:bg-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-[1.02]">
                  Secondary Action
                </button>
              </div>
              <p className="text-sm text-slate-400 pt-2">Subtle scale, gradient shifts, and glow on hover</p>
            </div>

            {/* Motion Cards */}
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 space-y-4 hover:border-pink-400/30 transition-all duration-500">
              <h3 className="text-xl font-semibold text-pink-200 mb-6">Interactive Cards</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveCard(i)}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 cursor-pointer transition-all duration-300 ${
                      activeCard === i ? 'scale-105 border-purple-400/50 shadow-xl shadow-purple-500/20' : ''
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 mb-2" />
                    <div className="h-2 bg-white/10 rounded w-3/4" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400 pt-2">Lift and glow on hover, smooth spring transitions</p>
            </div>

            {/* Shimmer Text */}
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 space-y-4 hover:border-purple-400/30 transition-all duration-500">
              <h3 className="text-xl font-semibold text-purple-200 mb-6">Gradient Text</h3>
              <div className="space-y-4">
                <h4 className="text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Shimmering headlines
                </h4>
                <p className="text-lg bg-gradient-to-r from-slate-300 via-purple-200 to-slate-300 bg-clip-text text-transparent">
                  Subtle gradient flow for emphasis
                </p>
              </div>
              <p className="text-sm text-slate-400 pt-2">Animated gradients that flow smoothly</p>
            </div>

            {/* Toast Demo */}
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 space-y-4 hover:border-pink-400/30 transition-all duration-500">
              <h3 className="text-xl font-semibold text-pink-200 mb-6">Toast Notifications</h3>
              <button
                onClick={showToastDemo}
                className="w-full px-6 py-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-xl font-medium hover:bg-pink-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Show Toast
              </button>
              <p className="text-sm text-slate-400 pt-2">Slide in from the top with gentle bounce</p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed top-6 right-6 z-50 transition-all duration-500 ${
          showToast ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-purple-500/50 border border-white/20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Toast notification appeared!</span>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="py-32 px-6 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Install in seconds
            </h2>
            <p className="text-xl text-slate-400">
              Copy components directly into your project. No npm bloat, no version conflicts.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-3xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-purple-300 font-mono">Terminal</span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <code className="text-lg text-pink-300 font-mono">
                npx litui add button
              </code>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto">
                <span className="text-2xl">📦</span>
              </div>
              <h4 className="font-semibold text-purple-200">Copied to your project</h4>
              <p className="text-sm text-slate-400">Components live in your codebase</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center mx-auto">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-semibold text-pink-200">Fully editable</h4>
              <p className="text-sm text-slate-400">Tweak styles and behavior freely</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto">
                <span className="text-2xl">🔓</span>
              </div>
              <h4 className="font-semibold text-purple-200">Zero lock-in</h4>
              <p className="text-sm text-slate-400">No package dependencies to maintain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Experience */}
      <div className="py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              Built for modern workflows
            </h2>
            <p className="text-xl text-slate-400">
              TypeScript, Tailwind, and the tools you already love
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🎯',
                title: 'TypeScript-first',
                desc: 'Fully typed components with intelligent autocomplete and type safety out of the box'
              },
              {
                icon: '🎨',
                title: 'Tailwind-powered',
                desc: 'Built with Tailwind utility classes. Customize easily with your design tokens'
              },
              {
                icon: '♿',
                title: 'Accessible by default',
                desc: 'ARIA attributes, keyboard navigation, and focus management baked into every component'
              },
              {
                icon: '⚡',
                title: 'Framework-ready',
                desc: 'Works seamlessly with Next.js, Vite, Remix, and any React environment'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-purple-200">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                  LitUI
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Built by <span className="text-purple-300 font-medium">Mukti Mishra</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://x.com/MuktiMishra6"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-slate-400 hover:text-purple-300 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/mukti-mishra-38379b229/"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-purple-300 transition-colors" />
              </a>
              <a
                href="https://github.com/muktimishra"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-slate-400 hover:text-purple-300 transition-colors" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
            <p>Motion-first React components • Copy, paste, and make them yours</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </div>
    </div>
  );
}