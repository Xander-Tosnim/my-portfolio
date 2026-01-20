import './Skills.css'

const skills = [
  { name: 'HTML5', src: '/icons/html.png' },
  { name: 'CSS3', src: '/icons/css.png' },
  { name: 'JS', src: '/icons/js.png' },
  { name: 'GIT', src: '/icons/git.png' },
  { name: 'GITHUB', src: '/icons/github.png' },
  { name: 'NPM', src: '/icons/npm.png' },
  { name: 'POSTGRE', src: '/icons/postgre.png' },
  { name: 'EXPRESS', src: '/icons/expressjs.png' },
  { name: 'REACT', src: '/icons/react.png' },
  { name: 'NODEJS', src: '/icons/nodejs.png' },
  { name: 'REDUX', src: '/icons/redux.png' },
  
];

function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills I'm Good At</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.src} alt={skill.name} />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;