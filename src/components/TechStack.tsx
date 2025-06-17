
import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const technologies = [
    // GameDev
    { name: 'Unity', icon: '🎮', category: 'GameDev' },
    { name: 'Game Design', icon: '🎯', category: 'GameDev' },
    { name: 'Game Mechanics', icon: '⚙️', category: 'GameDev' },
    { name: '3D Modeling', icon: '🎭', category: 'GameDev' },
    { name: 'Animation', icon: '🎬', category: 'GameDev' },
    { name: 'VR Development', icon: '🥽', category: 'GameDev' },
    { name: 'AR Development', icon: '📱', category: 'GameDev' },
    { name: 'Game Testing', icon: '🔍', category: 'GameDev' },
    { name: 'AI Programming', icon: '🤖', category: 'GameDev' },
    { name: 'Game Optimization', icon: '⚡', category: 'GameDev' },
    { name: 'Shader Programming', icon: '✨', category: 'GameDev' },
    { name: 'Physics Simulation', icon: '🌌', category: 'GameDev' },
    { name: 'Multiplayer Networking', icon: '🔗', category: 'GameDev' },
    { name: 'Mobile Game Dev', icon: '📱', category: 'GameDev' },
    { name: 'Console Game Dev', icon: '🎮', category: 'GameDev' },
    { name: 'Cross-Platform Dev', icon: '🔄', category: 'GameDev' },
    { name: 'Design Patterns', icon: '🏗️', category: 'GameDev' },
    { name: 'UGS', icon: '☁️', category: 'GameDev' },
    { name: 'PUN', icon: '🔌', category: 'GameDev' },

    // Database
    { name: 'SQL', icon: '🗃️', category: 'Database' },
    { name: 'MySQL', icon: '🐬', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PL/SQL', icon: '📊', category: 'Database' },

    // Languages
    { name: 'C#', icon: '💜', category: 'Languages' },
    { name: 'C++', icon: '⚡', category: 'Languages' },
    { name: 'Java', icon: '☕', category: 'Languages' },
    { name: 'PHP', icon: '🐘', category: 'Languages' },
    { name: 'Python', icon: '🐍', category: 'Languages' },
    { name: 'JavaScript', icon: '🟨', category: 'Languages' },
    { name: 'TypeScript', icon: '📘', category: 'Languages' },

    // Frameworks
    { name: 'Unity', icon: '🎮', category: 'Frameworks' },
    { name: 'Spring Boot', icon: '🌱', category: 'Frameworks' },
    { name: '.NET', icon: '🔷', category: 'Frameworks' },
    { name: 'Symfony', icon: '🎼', category: 'Frameworks' },
    { name: 'Next.js', icon: '▲', category: 'Frameworks' },
    { name: 'Node.js', icon: '🟢', category: 'Frameworks' },

    // DevOps
    { name: 'Jenkins', icon: '🔧', category: 'DevOps' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Nexus', icon: '📦', category: 'DevOps' },
    { name: 'SonarQube', icon: '🔍', category: 'DevOps' },
    { name: 'Git', icon: '📁', category: 'DevOps' },
    { name: 'Grafana', icon: '📈', category: 'DevOps' },
    { name: 'Prometheus', icon: '🔥', category: 'DevOps' },
  ];

  const categories = [
    { name: 'GameDev', color: 'neon-blue' },
    { name: 'Languages', color: 'neon-purple' },
    { name: 'Frameworks', color: 'neon-green' },
    { name: 'Database', color: 'neon-orange' },
    { name: 'DevOps', color: 'neon-pink' }
  ];

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const categoryTechs = technologies.filter(tech => tech.category === category.name);
        
        return (
          <div key={category.name} className="space-y-6">
            <h3 className={`text-2xl font-orbitron font-bold text-${category.color} mb-6`}>
              {category.name}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
              {categoryTechs.map((tech, index) => (
                <Card 
                  key={tech.name} 
                  className="hud-border bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group cursor-pointer tech-icon h-20"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-2 text-center flex flex-col justify-center h-full">
                    <div className="text-lg mb-1 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className={`font-rajdhani font-medium text-xs group-hover:text-${category.color} transition-colors leading-tight`}>
                      {tech.name}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
