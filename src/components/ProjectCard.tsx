
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  status: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-neon-green text-background';
      case 'Demo': return 'bg-neon-blue text-background';
      case 'Coming Soon': return 'bg-neon-orange text-background';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card 
      className="project-card group overflow-hidden"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge className={getStatusColor(project.status)}>
            {project.status}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-orbitron font-bold mb-3 text-neon-blue group-hover:neon-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green transition-all duration-300 font-orbitron">
            Play Now
          </Button>
          <Button 
            variant="outline" 
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300"
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
