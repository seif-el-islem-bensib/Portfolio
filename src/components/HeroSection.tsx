
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Building Worlds That Play Back";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="border border-neon-blue/10 animate-pulse"
              style={{
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-scale-up">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-4 neon-text text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green">
            WORLDWEAVER
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-rajdhani font-medium text-neon-blue">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="mb-12 animate-slide-in-left">
          <p className="text-xl md:text-2xl font-rajdhani text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Game Developer • Unity Expert • VR/AR Architect • WebGL Specialist
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-right">
          <Button 
            className="px-8 py-4 text-lg font-orbitron font-bold bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green transition-all duration-500 transform hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Games
          </Button>
          <Button 
            variant="outline" 
            className="px-8 py-4 text-lg font-orbitron font-bold border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Project
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-purple/30 rounded-full floating-element" />
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-neon-green/30 rounded-lg floating-element" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-20 w-12 h-12 border-2 border-neon-orange/30 rotate-45 floating-element" style={{ animationDelay: '4s' }} />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
