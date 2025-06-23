
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
        title: "RTS Falega Multiplayer",
        description: " Set in an alternate historical timeline, Fallega immerses you in the heart of a revolution. You lead a group of local resistance fighters rising against the might of a powerful French colonial force. As the leader, every decision you make determines the fate of your people — will you outmaneuver the occupiers, unite the regions, and reclaim your land? Fallega is a real-time strategy (RTS) game I co-developed, combining online matchmaking, 3D modeling, and multiplayer gameplay mechanics into a polished, interactive experience.",
        image: "/Fallega.png",
        tags: [ "Unity", "C#", "SteamVR","Game balancing"],
        demoUrl: "https://youtu.be/CAGgm8jqUJU",
        status: "Live"
      },
    {
      title: "Into my brain",
      description: "Defend the last frontier: your own mind. In Into My Brain, a surreal tower defense game, you fight off waves of invasive thoughts, fears, and corrupted memories as they try to seize control of your neural pathways. Strategically place cognitive towers—like Logic Nodes, Memory Restorers, and Emotion Regulators—across beautifully abstract landscapes of your subconscious.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      tags: [, "Unity", "C#", "Tower Defense", "Game Design"],
      demoUrl: "https://www.youtube.com/watch?v=HYBmKMAopXM",
      status: "Demo"
    },
    {
      title: "RootAte",
      description: "Step into Rotate, a puzzle game where you travel through time — from ancient civilizations to futuristic landscapes. Each era comes with its unique tools, technologies, and logic, challenging you to adapt and think differently in every level. Solve puzzles by cleverly rotating between time periods, unlocking secrets of the past to shape the future.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop",
      tags: [ "Unity",  "Mobile"],
      demoUrl: "https://youtu.be/EUCJxTDVyv8",
      status: "Demo"
    },
    {
      title: "Jiggsaw Puzzle",
      description: "Relax and challenge your mind with a beautifully crafted jigsaw puzzle experience. Piece together stunning images across various categories — nature, art, architecture, and more. With multiple difficulty levels and satisfying drag-and-drop mechanics, it’s perfect for casual play or a focused mental workout. Whether you're completing a 24-piece puzzle or a 1000-piece masterpiece, every solved image is a moment of calm and achievement.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      tags: ["Published", "Unity gaming services", "Unity", "Playstore "],
      demoUrl: "https://youtu.be/Jh3GNGeyD3o",
      status: "Live"
    },
    {
      title: "Resource Empire",
      description: "In Resource Empire, you start with a small patch of land and a handful of raw materials. Your goal? Build an unstoppable industrial empire. Mine resources, automate production, and optimize supply chains to fuel your expansion. As you grow, unlock advanced technologies, trade with other empires, and dominate the global economy. Every decision counts — balance efficiency, growth, and sustainability to become the ultimate tycoon.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      tags: ["Published", "Game Design", "Unity", "Design patterns", "Problem Solving"],
      demoUrl: "https://youtu.be/R0XHAVqoEWc",
      status: "Live"
    }
    ,
    {
      title: "Arcadia",
      description: "Step into XR Arcadia, an electrifying hub of immersive mini-games where reality bends and fun never ends! Whether you're dodging lasers in zero gravity, solving holographic puzzles, or mastering futuristic sports, each game is crafted to deliver fast-paced action and intuitive XR gameplay. Designed for quick rounds and instant thrills, XR Arcadia is perfect for party play, solo challenges, or VR/AR arcade competitions.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      tags: ["XR Core", "Unity", "Design patterns", "Problem Solving"],
      demoUrl: "https://youtu.be/Q6JEXl5slRQ",
      status: "Live"
    }
    
    ,
    {
      title: "BrandPlay",
      description: "BrandPlay is a gamified marketing platform that empowers brands to create interactive, reward-driven experiences. From mini-games like quizzes, penalty shoots, and memory matches to fully branded contests, BrandPlay turns marketing into play. Businesses can launch campaigns, collect user insights, and boost engagement, while users play for points, prizes, and unforgettable interactions. No coding needed — just creativity, strategy, and the will to stand out.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      tags: ["Node Js", "React", "WebGl", "Unity"],
      demoUrl: "https://youtu.be/1TIqnnHdNEU",
      status: "Live"
    }
    ,
    {
      title: "AR Indoor Navigation",
      description: "The AR Navigation System is an augmented reality application designed to guide users through physical spaces using real-time AR overlays. Utilizing smartphone or AR headset cameras, the system anchors digital navigation elements—such as arrows, path lines, and directional cues—onto the user’s real-world environment.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      tags: ["AR Core", "Unity Location Services", "WebGl", "Unity AR Foundation"],
      demoUrl:  "https://youtube.com/shorts/bafxX4j1zDg",
      status: "Live"
    }
  ];

  const webProjects = [
    {
      title: "Gamefied Marketing Platform",
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
    { name: "Unity", level: 80 },
    { name: "C#", level: 70 },
    { name: "WebGL", level: 85 },
    { name: "VR/AR Development", level: 70 },
    { name: "Machine Learning", level:50 },
    { name: "Mirror Networking", level: 65 },
    { name: "Node.js", level: 70 },
    { name: "React", level: 65 }
  ];

  const keySkills = [
    {
      category: "Game Development",
      skills: ["Unity", "C#", "Shader Graph", "URP", "VR/AR"],
      icon: "🎮",
      color: "neon-blue"
    },
    {
      category: "Web Technologies", 
      skills: ["WebGL", "React", "Node.js", "WebSockets"],
      icon: "🌐",
      color: "neon-purple"
    },
    {
      category: "Backend & Database",
      skills: ["MongoDB", "Firebase", "REST APIs"],
      icon: "🗄️",
      color: "neon-green"
    },
    {
      category: "DevOps & Tools",
      skills: ["DevOps", "Git", "CI/CD", "Monitoring"],
      icon: "⚙️",
      color: "neon-orange"
    },
    {
      category: "Design & UX",
      skills: ["UI/UX Design Thinking", "Gamification", "Interactive Media"],
      icon: "🎨",
      color: "neon-pink"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground game-cursor">
      <ParticleBackground />
      <Navigation activeSection={activeSection} />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Key Skills Section - Made more prominent */}
      <section className="py-32 px-4 relative z-10 bg-gradient-to-b from-background via-card/10 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-scale-up">
            <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-8 neon-text text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple">
              🔧 KEY SKILLS & TECHNOLOGIES
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8" />
            <p className="text-xl md:text-2xl font-rajdhani text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technologies and proven methodologies for next-generation digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keySkills.map((skillGroup, index) => (
              <Card 
                key={skillGroup.category} 
                className="hud-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:bg-card/90 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4 group-hover:scale-125 transition-transform duration-300">
                      {skillGroup.icon}
                    </span>
                    <h3 className={`text-2xl font-orbitron font-bold text-${skillGroup.color} group-hover:neon-text transition-all duration-300`}>
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                  <Badge 
                  key={skill} 
                  variant="outline" 
                  className={`border-${skillGroup.color}/50 text-white hover:bg-${skillGroup.color}/20 hover:scale-110 transition-all duration-300 text-sm font-medium px-3 py-1`}
                  style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                >
                  {skill}
                </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Work With Me Section - Enhanced */}
          <div className="mt-20">
            <Card className="hud-border bg-gradient-to-r from-card/90 to-card/70 backdrop-blur-sm animate-scale-up">
              <CardContent className="p-12">
                <h3 className="text-4xl font-orbitron font-bold mb-8 text-center neon-text text-neon-purple">
                  🚀 Why Work With Me?
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
                    <h4 className="text-xl font-orbitron font-bold mb-3 text-neon-blue">Game-First UX</h4>
                    <p className="text-lg leading-relaxed">
                      I merge game mechanics with functional UX to create memorable user experiences.
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🔧</div>
                    <h4 className="text-xl font-orbitron font-bold mb-3 text-neon-green">Clean & Scalable</h4>
                    <p className="text-lg leading-relaxed">
                      I'm fast, communicative, and committed to clean, modular, and scalable code.
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🚀</div>
                    <h4 className="text-xl font-orbitron font-bold mb-3 text-neon-orange">Full-Stack Expertise</h4>
                    <p className="text-lg leading-relaxed">
                      I can handle both frontend and backend seamlessly, including deployment and live support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
    {/* Key Skills Section - Made more prominent */}
<section className="py-32 px-4 relative z-10 bg-gradient-to-b from-background via-card/10 to-background">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16 animate-scale-up">
      <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-8 neon-text text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple">
        🔧 KEY SKILLS & TECHNOLOGIES
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8" />
      <p className="text-xl md:text-2xl font-rajdhani text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Cutting-edge technologies and proven methodologies for next-generation digital experiences
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {keySkills.map((skillGroup, index) => (
        <Card 
          key={skillGroup.category} 
          className="hud-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:bg-card/90 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4 group-hover:scale-125 transition-transform duration-300">
                {skillGroup.icon}
              </span>
              <h3 className={`text-2xl font-orbitron font-bold text-${skillGroup.color} group-hover:neon-text transition-all duration-300`}>
                {skillGroup.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillGroup.skills.map((skill, skillIndex) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className={`border-${skillGroup.color}/50 text-white hover:bg-${skillGroup.color}/20 hover:scale-110 transition-all duration-300 text-sm font-medium px-3 py-1`}
                  style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
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
                      { name: "GitHub", url: "https://github.com/seif-el-islem-bensib", icon: "🚀" },
                      { name: "itch.io", url: "https://seifbensib.itch.io", icon: "🎮" },
                      { name: "ArtStation", url: "#", icon: "🎨" },
                      { name: "LinkedIn", url: "https://www.linkedin.com/in/seif-esslem-benacibe/", icon: "💼" }
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
