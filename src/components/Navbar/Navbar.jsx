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
                <li> Contact</li>
                <a href="https://github.com/Xander-Tosnim/my-portfolio" target="_blank"><button><img width="40" height="40" src="https://img.icons8.com/fluency/48/github.png" alt="github"/></button></a>
            </ul>
        </nav>
    );
}

export default Navbar