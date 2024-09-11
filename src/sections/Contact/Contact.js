import './Contact.css';

const Contact = () => {
    return(
        <section>
            <div className='box'>
                <h1 id="contact">Contact Me</h1>
                <a href="https://www.linkedin.com/in/apanko/" className="homeLinkedin"><i className="fa-brands fa-linkedin"></i>@Andrew Panko's Linkedin</a>
                <a href="https://github.com/AndrewPankoProjects" className="homeGithub"><i className="fa-brands fa-github">@AndrewPankoProjects</i></a>
                <a href="mailto:andrew.s.panko@gmail.com"><i className="fa-brands fa-envelope">@Andrew Panko's Email</i></a>
            </div>
        </section>
    )
}

export default Contact;