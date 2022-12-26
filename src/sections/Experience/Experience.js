import './Experience.css'
import procorpic from '../../assets/Images/procor.jpg'

const Experience = () => {
    return(
        <section className='experienceSection'>
            <div className='box'>
                <div className="procorExperience">
                    <h1 id="experience">Experience</h1>
                    <h3>JAVA Application Developer</h3>
                    <h4>Oakville, Ontario, Canada</h4>
                    <img className ="procor" src={procorpic} alt="Procor Building"></img>
                    <p className='paragraph'>
                        Contributed in developing software products through an agile development cycle 
                        to delivering simplicity for clients and providing detailed documentation of functionality and changelogs
                    </p>
                    <p><em>Achievement:</em></p>
                    <p className='paragraph'>
                        Collaborated with a team to refactor 80 JAVA products to expand functionality and compatibility with newer technologies
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Experience;