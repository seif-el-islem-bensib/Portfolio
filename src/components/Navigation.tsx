
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'tech', label: 'Tech' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neon-blue/30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <a
  href="https://drive.google.com/file/d/1pKtVFrVkkHqnJEQgs51X7411Z4EQZoT6/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="font-orbitron font-bold text-xl text-neon-blue neon-text"
>
  Link To Resume
</a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-rajdhani font-medium transition-all duration-300 hover:text-neon-blue ${
                activeSection === item.id ? 'text-neon-blue neon-text' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <div className={`w-6 h-0.5 bg-neon-blue transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-neon-blue transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-neon-blue transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-neon-blue/30">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 font-rajdhani font-medium transition-all duration-300 hover:text-neon-blue ${
                  activeSection === item.id ? 'text-neon-blue neon-text' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
