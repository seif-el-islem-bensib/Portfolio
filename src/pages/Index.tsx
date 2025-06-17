
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

  const webProjects = [
    {
      title: "GameHub Interactive Platform",
      description: "Full-stack gaming platform with user profiles, achievements, and real-time leaderboards",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      tags: ["React", "Node.js", "WebSocket", "MongoDB"],
      url: "#",
      type: "Web App"
    },
    {
      title: "VR Showcase Portfolio",
      description: "Interactive 3D portfolio showcasing VR experiences with WebGL integration",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=300&fit=crop",
      tags: ["Three.js", "WebGL", "React", "TypeScript"],
      url: "#",
      type: "Portfolio"
    },
    {
      title: "GameDev Learning Hub",
      description: "Educational platform with interactive tutorials and gamified progress tracking",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      tags: ["Next.js", "Firebase", "Gamification", "UX"],
      url: "#",
      type: "Educational"
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

  const keySkills = [
    {
      category: "Game Development",
      skills: ["Unity", "C#", "Shader Graph", "URP", "VR/AR"]
    },
    {
      category: "Web Technologies",
      skills: ["WebGL", "React", "Node.js", "WebSockets"]
    },
    {
      category: "Backend & Database",
      skills: ["MongoDB", "Firebase", "REST APIs"]
    },
    {
      category: "DevOps & Tools",
      skills: ["DevOps", "Git", "CI/CD", "Monitoring"]
    },
    {
      category: "Design & UX",
      skills: ["UI/UX Design Thinking", "Gamification", "Interactive Media"]
    }
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
                  <p className="text-lg leading-relaxed mb-6">
                    From concept to deployment, I craft interactive worlds that engage, challenge, 
                    and inspire players across multiple platforms.
                  </p>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-orbitron font-bold mb-4 text-neon-purple">
                      🚀 Why Work With Me?
                    </h4>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-start">
                        <span className="text-neon-green mr-2">▶</span>
                        I merge game mechanics with functional UX to create memorable user experiences.
                      </li>
                      <li className="flex items-start">
                        <span className="text-neon-green mr-2">▶</span>
                        I'm fast, communicative, and committed to clean, modular, and scalable code.
                      </li>
                      <li className="flex items-start">
                        <span className="text-neon-green mr-2">▶</span>
                        I can handle both frontend and backend seamlessly, including deployment and live support.
                      </li>
                    </ul>
                  </div>
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

      {/* Key Skills Section */}
      <section className="py-20 px-4 relative z-10 bg-gradient-to-r from-background/50 to-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-12 text-center neon-text text-neon-green">
            🔧 Key Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keySkills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="hud-border bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-blue">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-12 text-center neon-text text-neon-purple">
            Featured Game Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Web Projects Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-12 text-center neon-text text-neon-orange">
            Web Development Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <Card key={project.title} className="hud-border bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 project-card">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-neon-blue/80 text-white">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-orbitron font-bold mb-3 text-neon-blue">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-neon-orange to-neon-purple hover:from-neon-purple hover:to-neon-orange"
                      onClick={() => window.open(project.url, '_blank')}
                    >
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
