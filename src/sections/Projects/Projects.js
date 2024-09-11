import './Projects.css'
import React, { useState } from "react";
import Modal from '../../assets/Modal/Modal.js';

const Projects = () => {

    const [showModal, setShowModal] = useState(false);
    const [currentIcon, setIcon] = useState('empty');

    const openModal = (name) => {
      setShowModal(true);
      setIcon(name);
    }

    //For this section I want to map out all the projects with Image, Title, Description Format
    return(
        <section className='box'>
            <h1 id="projects" className='ongoing'>Ongoing Projects...</h1>
                <div className='row'>
                    <div className='column dndstorybook'>
                        <i name = 'dnd' onClick={()=>openModal('dnd')} className="icons fa-solid fa-dragon"></i><br/>
                        {showModal ? <Modal setShowModal={setShowModal} selectedIcon={currentIcon}/> : null}
                        <label>Dungeon's & Dragons: Story book</label>
                    </div>
                    <div className='column arhinslim'>
                        <i name = 'arhinslim' onClick={()=>openModal('arhinslim')} className="icons fa-solid fa-music"></i><br/>
                        {showModal ? <Modal setShowModal={setShowModal} selectedIcon={currentIcon}/> : null}
                        <label>Arhinslim.ca</label>
                    </div>
                    <div className='column mtgprimers'>
                        <i name = 'dndwarwizard' onClick={()=>openModal('dndwarwizard')} className="icons fa-solid fa-hat-wizard"></i><br/>
                        {showModal ? <Modal setShowModal={setShowModal} selectedIcon={currentIcon}/> : null}
                        <label>Dungeon's & Dragons: War Wizard Build/Guide</label>
                    </div>
                </div>
            <h1 className='completed'>Completed Projects...</h1>
                <div className='row'>
                    <div className='column pokemonweaknesschart'>
                        <i onClick={()=>openModal('chart')} className="icons fa-solid fa-gamepad"></i><br/>
                        {showModal ? <Modal setShowModal={setShowModal} selectedIcon={currentIcon}/> : null}
                        <label>Pokemon Weakness Chart</label>
                    </div>
                    <div className='column rockpaperscissors'>
                        <i onClick={()=>openModal('rockpaperscissors')} className="icons fa-solid fa-chess-board"></i><br/>
                        {showModal ? <Modal setShowModal={setShowModal} selectedIcon={currentIcon}/> : null}
                        <label>Rock Paper Scissors</label>
                    </div>
                    <div className='column litinfo'>
                        <i onClick={()=>openModal('litinfo')} className="icons fa-solid fa-fire-extinguisher"></i><br/>
                        {showModal ? <Modal setShowModal={setShowModal} selectedIcon={currentIcon}/> : null}
                        <label>Hamilton's Fire Department Locations</label>
                    </div>
                    <div className='column hamiltonwardinfo'>
                        <i onClick={()=>openModal('hwi')} className="icons fa-solid fa-house-chimney-window"></i><br/>
                        {showModal ? <Modal setShowModal={setShowModal} selectedIcon={currentIcon}/> : null}
                        <label>Hamilton's Ward Information</label>
                    </div>
                </div>
            <h1 className='future'>Future Projects...</h1>
            <div className='row'>
                    <div className='column financetracker'>
                        <i className="icons fa-solid fa-money-bill-trend-up"></i><br/>
                        <label>Finance Tracker Project</label>
                    </div>
                    <div className='column blackjack'>
                        <i className="icons fa-solid fa-diamond"></i><br/>
                        <label>Blackjack Project</label>
                    </div>
                </div>
        </section>
    );
}

export default Projects;