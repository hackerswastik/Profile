import React, { useMemo, useState } from 'react';
import { skillGroups } from '@/data/skills';
import Badge from './Badge';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  category: string;
};

const skills: Skill[] = [
  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' }
];

export default function Skills() {
  const categories = useMemo(() => skillGroups.map((g) => g.category), []);
  const [active, setActive] = useState(categories[0]);
  const group = skillGroups.find((g) => g.category === active)!;

  return (
    <section className="netflix-section">
      <h2 className="netflix-title">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="bg-netflix-dark-gray p-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div>
                <h3 className="font-medium text-white">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

