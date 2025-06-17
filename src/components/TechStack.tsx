
import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const technologies = [
    { name: 'Unity', icon: '🎮', category: 'Game Engine' },
    { name: 'C#', icon: '⚡', category: 'Programming' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'WebGL', icon: '🌐', category: 'Web Graphics' },
    { name: 'VR/AR', icon: '🥽', category: 'Extended Reality' },
    { name: 'Blender', icon: '🎭', category: '3D Modeling' },
    { name: 'Photoshop', icon: '🎨', category: 'Design' },
    { name: 'Git', icon: '📦', category: 'Version Control' },
    { name: 'WebSocket', icon: '🔗', category: 'Networking' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'TypeScript', icon: '📘', category: 'Programming' },
    { name: 'ShaderGraph', icon: '✨', category: 'Graphics' }
  ];

  const categories = Array.from(new Set(technologies.map(tech => tech.category)));

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-2xl font-orbitron font-bold text-neon-purple mb-6">
            {category}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies
              .filter(tech => tech.category === category)
              .map((tech, index) => (
                <Card 
                  key={tech.name} 
                  className="hud-border bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group cursor-pointer tech-icon"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="font-rajdhani font-medium text-sm group-hover:text-neon-blue transition-colors">
                      {tech.name}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
