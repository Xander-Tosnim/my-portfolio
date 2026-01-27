import './Projects.css'

const projects = [
    {name: "BookNow", url: "https://booknow-upni.onrender.com", sample:"/book-now.png", descripton:"A React project from Codecademy for bookmarking calendar"}
]

function Projects() {

    return(
        <div className="projects">
            <h2>&lt;Projects /&gt;</h2>
            <div className='project-list'>
                {projects.map((project, index) => {
                    <div key={index} className='project-card'>
                        <img src={project.sample} alt={project.name} />
                        <h3>{project.name}</h3>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Projects;