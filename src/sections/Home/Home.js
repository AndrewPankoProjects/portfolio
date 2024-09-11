import './Home.css'
import profilepic from '../../assets/Images/profilepic.png'

export default function Home() {
    return(
        <>
            <section id="home" className='blurbBox'>
                <img className='profile' src={profilepic} alt="Andrew Panko"/>
                <div className="modalLinks">
                <a href="https://www.linkedin.com/in/apanko/" className="homeLinkedin"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/AndrewPankoProjects" className="homeGithub"><i className="fa-brands fa-github"></i></a>
                </div>
                <h1>Andrew Panko</h1><hr/>
                <p className="title">Aspiring <b>Software Developer</b> based in Canada, Ontario</p>
                <a className="arrow fa-solid fa-arrow-down" href="#about"> </a>
            </section>
        </>
    );
}
