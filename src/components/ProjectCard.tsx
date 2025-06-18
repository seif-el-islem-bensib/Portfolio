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

  const isYouTube = project.demoUrl.includes("youtube.com") || project.demoUrl.includes("youtu.be");

  const extractYouTubeId = (url: string): string | null => {
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname === 'youtu.be') {
        return parsedUrl.pathname.slice(1);
      }
      if (parsedUrl.hostname.includes('youtube.com')) {
        return parsedUrl.searchParams.get('v');
      }
      return null;
    } catch {
      return null;
    }
  };

  const videoId = isYouTube ? extractYouTubeId(project.demoUrl) : null;

  return (
    <Card 
      className="project-card group overflow-hidden"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative overflow-hidden">
        {isYouTube && videoId ? (
          <div className="w-full relative pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}

        <div className="absolute top-4 right-4">
          <Badge className={getStatusColor(project.status)}>
            {project.status}
          </Badge>
        </div>

        {/*  Allow click-through to iframe */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
