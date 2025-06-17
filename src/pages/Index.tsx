
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import HeroSection from '@/components/HeroSection';
import ParticleBackground from '@/components/ParticleBackground';
import ProjectCard from '@/components/ProjectCard';
import SkillBar from '@/components/SkillBar';
import TechStack from '@/components/TechStack';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'tech', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Quantum Odyssey VR",
      description: "Immersive VR space exploration game built with Unity and SteamVR SDK",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
      tags: ["VR", "Unity", "C#", "SteamVR"],
      demoUrl: "#",
      status: "Live"
    },
    {
      title: "Cyberpunk Racing WebGL",
      description: "High-speed racing game optimized for web browsers with WebGL",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      tags: ["WebGL", "Unity", "JavaScript", "Racing"],
      demoUrl: "#",
      status: "Demo"
    },
    {
      title: "AR Portal Adventure",
      description: "Augmented reality mobile game with real-world interaction",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop",
      tags: ["AR", "Unity", "ARCore", "Mobile"],
      demoUrl: "#",
      status: "Coming Soon"
    },
    {
      title: "Multiplayer Battle Arena",
      description: "Real-time multiplayer game with WebSocket networking",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      tags: ["Multiplayer", "WebSocket", "Unity", "Networking"],
      demoUrl: "#",
      status: "Live"
    }
  ];

  const skills = [
    { name: "Unity", level: 95 },
    { name: "C#", level: 90 },
    { name: "WebGL", level: 85 },
    { name: "React", level: 80 },
    { name: "VR/AR Development", level: 88 },
    { name: "Shader Programming", level: 75 },
    { name: "Game Design", level: 92 },
    { name: "3D Modeling", level: 70 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground game-cursor">
      <ParticleBackground />
      <Navigation activeSection={activeSection} />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-12 text-center neon-text text-neon-blue">
              About Me
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <Card className="hud-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-orbitron font-bold mb-4 text-neon-blue">
                    Game Developer & Digital Architect
                  </h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Passionate about creating immersive digital experiences that blur the line between 
                    reality and imagination. With 5+ years in game development, I specialize in Unity, 
                    VR/AR technologies, and cutting-edge web games.
                  </p>
                  <p className="text-lg leading-relaxed">
                    From concept to deployment, I craft interactive worlds that engage, challenge, 
                    and inspire players across multiple platforms.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6 animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill.name} 
                    level={skill.level}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-12 text-center neon-text text-neon-purple">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-12 text-center neon-text text-neon-green">
            Tech Arsenal
          </h2>
          <TechStack />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-12 text-center neon-text text-neon-orange">
            Let's Create Something Epic
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="hud-border bg-card/80 backdrop-blur-sm animate-scale-up">
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 text-neon-blue">
                  Get In Touch
                </h3>
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-background/50 border-neon-blue/30 focus:border-neon-blue text-white"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-background/50 border-neon-blue/30 focus:border-neon-blue text-white"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Project Details..." 
                      rows={5}
                      className="bg-background/50 border-neon-blue/30 focus:border-neon-blue text-white resize-none"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 font-orbitron font-bold">
                    Launch Mission
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6 animate-scale-up">
              <Card className="hud-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-xl font-orbitron font-bold mb-4 text-neon-purple">
                    Connect Across Platforms
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: "GitHub", url: "#", icon: "🚀" },
                      { name: "itch.io", url: "#", icon: "🎮" },
                      { name: "ArtStation", url: "#", icon: "🎨" },
                      { name: "LinkedIn", url: "#", icon: "💼" }
                    ].map((link) => (
                      <a 
                        key={link.name}
                        href={link.url}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-background/30 hover:bg-neon-blue/20 transition-all duration-300 group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {link.icon}
                        </span>
                        <span className="font-rajdhani font-medium group-hover:text-neon-blue transition-colors">
                          {link.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-neon-blue/30 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 WorldWeaver. Building the future of interactive entertainment.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
