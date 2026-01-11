import React, { useState } from 'react';
import { 
  Sparkles, Github, Linkedin, Twitter, Menu, X, 
  Copy, Check, ChevronRight, Search, Package,
  Zap, Heart, MousePointer, Box, Type, Bell,
  Layout, Image, List, Calendar
} from 'lucide-react';

export default function Documentation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('button');
  const [copied, setCopied] = useState('');
  const [activeTab, setActiveTab] = useState('preview');

  const components = [
    { id: 'button', name: 'Button', icon: MousePointer, category: 'Buttons' },
    { id: 'magnetic-button', name: 'Magnetic Button', icon: Zap, category: 'Buttons' },
    { id: 'shimmer-button', name: 'Shimmer Button', icon: Sparkles, category: 'Buttons' },
    { id: 'card', name: 'Motion Card', icon: Box, category: 'Layout' },
    { id: 'toast', name: 'Toast', icon: Bell, category: 'Feedback' },
    { id: 'gradient-text', name: 'Gradient Text', icon: Type, category: 'Typography' },
  ];

  const componentData = {
    button: {
      name: 'Animated Button',
      description: 'A beautiful button with smooth hover animations, gradient effects, and scale transforms.',
      dependencies: ['lucide-react'],
      preview: (
        <div className="flex flex-col gap-4 items-center justify-center min-h-[300px]">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10">Primary Button</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl font-medium text-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
            Secondary Button
          </button>
        </div>
      ),
      code: `import React from 'react';

export default function AnimatedButton({ children, variant = 'primary' }) {
  if (variant === 'primary') {
    return (
      <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    );
  }

  return (
    <button className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl font-medium text-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
      {children}
    </button>
  );
}`,
      installation: `npx litui add button`
    },
    'magnetic-button': {
      name: 'Magnetic Button',
      description: 'An interactive button that follows your cursor with smooth magnetic-like attraction.',
      dependencies: ['lucide-react'],
      preview: (
        <div className="flex items-center justify-center min-h-[300px]">
          <button 
            className="group relative px-10 py-5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl font-semibold text-xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/60"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.1)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Hover me
              <Sparkles className="w-5 h-5" />
            </span>
          </button>
        </div>
      ),
      code: `import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MagneticButton({ children }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = \`translate(\${x * 0.1}px, \${y * 0.1}px) scale(1.1)\`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
  };

  return (
    <button 
      className="group relative px-10 py-5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl font-semibold text-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/60"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}`,
      installation: `npx litui add magnetic-button`
    },
    'shimmer-button': {
      name: 'Shimmer Button',
      description: 'A button with an animated shimmer effect that sweeps across on hover.',
      dependencies: [],
      preview: (
        <div className="flex items-center justify-center min-h-[300px]">
          <button className="group relative px-8 py-4 bg-slate-800 border border-slate-700 rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Shimmer Effect</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </button>
        </div>
      ),
      code: `import React from 'react';

export default function ShimmerButton({ children }) {
  return (
    <button className="group relative px-8 py-4 bg-slate-800 border border-slate-700 rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105">
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
    </button>
  );
}`,
      installation: `npx litui add shimmer-button`
    },
    card: {
      name: 'Motion Card',
      description: 'An interactive card that lifts and glows on hover with smooth spring animations.',
      dependencies: [],
      preview: (
        <div className="flex items-center justify-center min-h-[300px] p-8">
          <div className="group p-6 w-80 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-slate-700/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-purple-200">Motion Card</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Hover to see the smooth lift effect with gradient border glow and shadow.
            </p>
          </div>
        </div>
      ),
      code: `import React from 'react';

export default function MotionCard({ icon: Icon, title, description }) {
  return (
    <div className="group p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-slate-700/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
          {Icon && <Icon className="w-6 h-6 text-purple-300" />}
        </div>
        <h3 className="text-xl font-semibold text-purple-200">{title}</h3>
      </div>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}`,
      installation: `npx litui add motion-card`
    },
    toast: {
      name: 'Toast Notification',
      description: 'A notification toast that slides in smoothly from the top with a bounce effect.',
      dependencies: ['lucide-react'],
      preview: (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-6">
          <button 
            onClick={() => {
              const toast = document.getElementById('demo-toast');
              toast.classList.remove('-translate-y-20', 'opacity-0');
              toast.classList.add('translate-y-0', 'opacity-100');
              setTimeout(() => {
                toast.classList.add('-translate-y-20', 'opacity-0');
                toast.classList.remove('translate-y-0', 'opacity-100');
              }, 3000);
            }}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium hover:scale-105 transition-all duration-300"
          >
            Show Toast
          </button>
          <div 
            id="demo-toast"
            className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-purple-500/50 border border-white/20 backdrop-blur-sm -translate-y-20 opacity-0 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Notification appeared!</span>
            </div>
          </div>
        </div>
      ),
      code: `import React, { useState } from 'react';
import { Bell } from 'lucide-react';

export default function Toast({ message, show, onClose }) {
  return (
    <div 
      className={\`fixed top-6 right-6 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-purple-500/50 border border-white/20 backdrop-blur-sm transition-all duration-500 \${
        show ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
      }\`}
    >
      <div className="flex items-center gap-3">
        <Bell className="w-5 h-5 text-white" />
        <span className="text-white font-medium">{message}</span>
      </div>
    </div>
  );
}

// Usage example:
// const [showToast, setShowToast] = useState(false);
// <Toast message="Success!" show={showToast} onClose={() => setShowToast(false)} />`,
      installation: `npx litui add toast`
    },
    'gradient-text': {
      name: 'Gradient Text',
      description: 'Animated gradient text with flowing colors and shimmer effects.',
      dependencies: [],
      preview: (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-6">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Beautiful Text
          </h1>
          <p className="text-2xl bg-gradient-to-r from-slate-300 via-purple-200 to-slate-300 bg-clip-text text-transparent">
            Subtle gradient flow
          </p>
        </div>
      ),
      code: `import React from 'react';

export default function GradientText({ children, className = '', animated = true }) {
  return (
    <h1 className={\`bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent \${animated ? 'bg-[length:200%_auto] animate-gradient' : ''} \${className}\`}>
      {children}
    </h1>
  );
}

// Add to your global CSS or tailwind config:
// @keyframes gradient {
//   0%, 100% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
// }
// .animate-gradient {
//   animation: gradient 3s ease infinite;
// }`,
      installation: `npx litui add gradient-text`
    }
  };

  const currentComponent = componentData[selectedComponent];

  const copyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(''), 2000);
  };

  const categories = [...new Set(components.map(c => c.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-700/50">
        <nav className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 transition-all duration-300"
              >
                <Menu className="w-6 h-6" />
              </button>
              <a href="/" className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                  LitUI
                </span>
              </a>
              <span className="hidden sm:block text-slate-500">/</span>
              <span className="hidden sm:block text-slate-400">Documentation</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com" className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5 text-slate-400" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex max-w-[1800px] mx-auto">
        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-[73px] left-0 h-[calc(100vh-73px)] w-72 bg-slate-950/50 backdrop-blur-xl border-r border-slate-700/50 overflow-y-auto transition-transform duration-300 z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="p-6 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search components..."
                className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-sm focus:outline-none focus:border-purple-400/50 transition-all duration-300"
              />
            </div>

            {/* Getting Started */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3">Getting Started</h3>
              <a href="#intro" className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-slate-800/50 transition-all duration-200">
                <ChevronRight className="w-4 h-4" />
                <span>Introduction</span>
              </a>
              <a href="#installation" className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-slate-800/50 transition-all duration-200">
                <ChevronRight className="w-4 h-4" />
                <span>Installation</span>
              </a>
            </div>

            {/* Components by Category */}
            {categories.map(category => (
              <div key={category} className="space-y-2">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3">{category}</h3>
                {components.filter(c => c.category === category).map(comp => (
                  <button
                    key={comp.id}
                    onClick={() => {
                      setSelectedComponent(comp.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                      selectedComponent === comp.id
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                        : 'text-slate-400 hover:text-purple-300 hover:bg-slate-800/50'
                    }`}
                  >
                    <comp.icon className="w-4 h-4" />
                    <span>{comp.name}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-12 overflow-x-hidden">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Component Header */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                {currentComponent.name}
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                {currentComponent.description}
              </p>
            </div>

            {/* Installation */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-purple-200 flex items-center gap-2">
                <Package className="w-6 h-6" />
                Installation
              </h2>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
                <div className="relative p-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-purple-300 font-mono">Terminal</span>
                    <button
                      onClick={() => copyCode(currentComponent.installation)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all duration-300 text-xs"
                    >
                      {copied === currentComponent.installation ? (
                        <>
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <code className="text-pink-300 font-mono text-sm">
                    {currentComponent.installation}
                  </code>
                </div>
              </div>
            </div>

            {/* Dependencies */}
            {currentComponent.dependencies.length > 0 && (
              <div className="p-4 bg-purple-500/10 border border-purple-400/30 rounded-2xl">
                <h3 className="text-sm font-semibold text-purple-200 mb-2">Required Dependencies</h3>
                <div className="flex flex-wrap gap-2">
                  {currentComponent.dependencies.map(dep => (
                    <code key={dep} className="px-3 py-1 bg-slate-900/50 border border-slate-700/50 rounded-lg text-sm text-purple-300 font-mono">
                      {dep}
                    </code>
                  ))}
                </div>
              </div>
            )}

            {/* Tabs */}
            <div className="border-b border-slate-700/50">
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2 font-medium transition-all duration-300 border-b-2 ${
                    activeTab === 'preview'
                      ? 'text-purple-300 border-purple-400'
                      : 'text-slate-500 border-transparent hover:text-slate-300'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-4 py-2 font-medium transition-all duration-300 border-b-2 ${
                    activeTab === 'code'
                      ? 'text-purple-300 border-purple-400'
                      : 'text-slate-500 border-transparent hover:text-slate-300'
                  }`}
                >
                  Code
                </button>
              </div>
            </div>

            {/* Preview/Code Content */}
            {activeTab === 'preview' ? (
              <div className="p-8 bg-slate-900/50 border border-slate-700/50 rounded-3xl">
                {currentComponent.preview}
              </div>
            ) : (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
                <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                    <span className="text-xs text-purple-300 font-mono">{currentComponent.name}.jsx</span>
                    <button
                      onClick={() => copyCode(currentComponent.code)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all duration-300 text-xs"
                    >
                      {copied === currentComponent.code ? (
                        <>
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm text-slate-300 font-mono leading-relaxed">
                      {currentComponent.code}
                    </code>
                  </pre>
                </div>
              </div>
            )}

            {/* Usage Notes */}
            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl space-y-3">
              <h3 className="text-lg font-semibold text-purple-200">Usage Notes</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-1 text-purple-400 flex-shrink-0" />
                  <span>This component is copied directly into your project - you own the code completely</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-1 text-purple-400 flex-shrink-0" />
                  <span>Customize styles, animations, and behavior to fit your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-1 text-purple-400 flex-shrink-0" />
                  <span>Built with Tailwind CSS utility classes for easy customization</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>

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
  );
}