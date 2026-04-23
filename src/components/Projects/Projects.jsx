import './Projects.css'

const projects = [
    {name: "Tic-Tac-Toe", url: "https://tic-tac-toe-ochre-mu-19.vercel.app/", sample:"/tic-tac-toe.png", descripton:"A NextJS project, code on TypeScript and style using Tailwind, Lucide-react icon library. Basically a old school fun game."},
    {name: "X-Stationery", url: "https://pern-product-store-x-stationery.onrender.com/", sample:"/x-stationery.png", descripton:"An e-commerce example project with basic features. A stationery online shop. Theme and styling with daisyUI."},
    {name: "BookNow", url: "https://booknow-upni.onrender.com", sample:"/book-now.png", descripton:"A React project from Codecademy for bookmarking calendar"},
    {name: "Fotomatic", url: "https://xander-tosnim.github.io/Fotomatic/", sample:"/fotomatic.png", descripton:"A simple HTML and CSS project from Codecademy"},
    {name: "Tea Cozy", url: "https://xander-tosnim.github.io/The-Tea-Cozy/", sample:"/tea-cozy.png", descripton:"A simple HTML and CSS project from Codecademy"}
]

function Projects() {

    return(
        <div className="projects-container">
            <h2>&lt;Projects /&gt;</h2>
            <div className='project-list'>
                {projects.map((project, index) => (
                    <div key={index} className='project-card'>
                        <img src={project.sample} alt={project.name} />
                        <div className='info'>
                            <h3><a href={project.url} target='_blank'>{project.name}</a></h3> 
                            <p>{project.descripton}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;