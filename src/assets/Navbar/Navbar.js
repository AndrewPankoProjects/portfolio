import './Navbar.css';
import { useRef } from 'react';

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("show_menu");
    }
    return (
		//Add Icons to each individual anchor
        <header className="header1">
			<nav className="nav container" >
				<a href="#home" className="logo">Andrew Panko</a>
				<div className='nav_menu' ref={navRef}>
					<ul className='nav_list grid'>
						<li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
						<li className="nav-item"><a className="nav-link" href="#about">About</a></li>
						<li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
						<li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
						<li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
					</ul>	

					<i onClick={showNavbar} className="fa-solid fa-xmark nav_close"></i>
				</div>
				<i onClick={showNavbar} className="fa-solid fa-bars nav_toggle"></i>
			</nav>
		</header>   
    )
}

export default Navbar;