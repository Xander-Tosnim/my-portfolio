import './Navbar.css'
//import { FaHome, FaProjectDiagram, FaFileAlt, FaGithub } from 'react-icons/fa';

function Navbar() {

    return(
        <nav className='navbar'>
            <img className='my-logo' src="/icons/my-logo-black.png" alt="logo" />
            <ul>
                <li> Home</li>
                <li> About</li>
                <li> Projects</li>
                <li> Resume</li>
                <li> Contact</li>
                <li><button>Git Repo</button></li>
            </ul>
        </nav>
    );
}

export default Navbar