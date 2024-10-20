import React from 'react';

import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 76 },
  { name: 'React', level: 76 },
  { name: 'Node.js', level: 75 },
  { name: 'Java', level: 80 },
  { name: 'MongoDB', level: 78 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar">
            <div
              className="skill-level"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          <span className="skill-percentage">{skill.level}%</span>
        </div>
      ))}
    </section>
  );
};

export default Skills;