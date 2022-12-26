import './About.css'

//Add pdf of resume
const About = () => {
    return(
        <>
            <section>
                    <div className='box'>
                        <h1 className="anchor" id="about">About Me</h1>
                            <p className='paragraph'> 
                                I have a passion for creating applications from the ground up 
                                and developing software to solve real-life problems. 
                            </p>
                            <p className='paragraph'>
                                I specialize in JavaScript, React.js, Vue.js, PHP... with multiple ongoing projects. 
                            </p>
                            <div className='row iconSection'>
                                <div className='iconbox column'>
                                    <i className="icons fa-brands fa-react"></i>
                                </div>
                                <div className='iconbox column'>
                                    <i className="icons fa-brands fa-vuejs"></i>
                                </div>
                                <div className='iconbox column'>
                                    <i className="icons fa-brands fa-java"></i>
                                </div>
                                <div className='iconbox column'>
                                    <i className="icons fa-brands fa-php"></i>
                                </div>
                                <div className='iconbox column'>
                                    <i className="icons fa-brands fa-python"></i>
                                </div>
                                <div className='iconbox column'>
                                    <i className="icons fa-brands fa-html5"></i>
                                </div>
                                <div className='iconbox column'>
                                    <i className="icons fa-brands fa-css3-alt"></i>
                                </div>
                            </div>
                            <a download href='#hi'>

                            </a>
                    </div>

                    
            </section>
        </>
    );
}

export default About;