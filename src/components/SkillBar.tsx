
import { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
}

const SkillBar = ({ skill, level, delay = 0 }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedLevel(level);
          }, delay * 1000);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-rajdhani font-medium text-sm">{skill}</span>
        <span className="text-xs text-neon-blue font-bold">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{ 
            width: isVisible ? `${animatedLevel}%` : '0%',
            transitionDelay: `${delay}s`
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
