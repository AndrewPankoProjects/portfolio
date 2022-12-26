import React, { useRef } from "react";
import ReactDom from "react-dom";
import './Modal.css';
import arhinslim from '../../assets/Images/Projects/arhinslim.png'
import dnd from '../../assets/Images/Projects/dnd.png'
import dndwarwizard from '../../assets/Images/Projects/dndwarwizard.png'
import chart from '../../assets/Images/Projects/weaknesschart.png'
import rockpaperscissors from '../../assets/Images/Projects/rockpaperscissors.png'
import litinfo from '../../assets/Images/Projects/litinfo.png'
import hwi from '../../assets/Images/Projects/hwi.png'

export default function Modal({selectedIcon, setShowModal} ){
    const modalRef = useRef();
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false);
        }
    };
    
    if(selectedIcon==='dnd'){
        return ReactDom.createPortal(
            <div className="popout" ref={modalRef} onClick={closeModal}>
                <div className="modal">
                <div className="modalRow">
                    <h2 className="modalTitle">Dungeon's & Dragons: Story book</h2>
                    <img className="modalImage" src={dnd} alt="website"></img>
                    <p className="modalDesc">
                        A visual novel type website, that is currently in development.. 
                        The website includes CSS animations for the book and in the future, I plan on adding multiple 
                        novels for users to choose from.. Possible payment process in long term that unlocks various novels.</p>
                    <div className="techContainer">
                        <label className="modalLabels">React</label>
                        <label className="modalLabels">HTML</label>
                        <label className="modalLabels">CSS</label>
                    </div>
                    <div className="modalLinks">
                        <a href="https://andrewpankoprojects.github.io/dnd_story_book/" className="modalButton">Link <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        <a href="https://github.com/AndrewPankoProjects/dnd_story_book" className="modalButton">Link <i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                    <i onClick={() => setShowModal(false)} className='fa-solid fa-xmark closeIcon'></i>
                </div>
            </div>,
        document.getElementById("portal")
        );
    }
    if(selectedIcon==='arhinslim'){
        return ReactDom.createPortal(
            <div className="popout" ref={modalRef} onClick={closeModal}>
                <div className="modal">
                    <div className="modalRow">
                        <h2 className="modalTitle">Arhinslim.com</h2>
                        <img className="modalImage" src={arhinslim} alt="website"></img>
                        <p className="modalDesc">
                            A website made for a client that wanted to express his music ambitions,
                            as well showcase his own merchandise brand. Currently under renovation..
                        </p>
                        <div className="techContainer">
                            <label className="modalLabels">PHP</label>
                            <label className="modalLabels">Laravel</label>
                            <label className="modalLabels">CSS</label>
                        </div>
                        <a href="https://www.arhinslim.com" className="modalButton">Link <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    
                    <i onClick={() => setShowModal(false)} className='fa-solid fa-xmark closeIcon'></i>
                </div>
            </div>,
        document.getElementById("portal")
        );
    }
    if(selectedIcon==='dndwarwizard'){
        return ReactDom.createPortal(
            <div className="popout" ref={modalRef} onClick={closeModal}>
                <div className="modal">
                    <div className="modalRow">
                        <h2 className="modalTitle">Dungeon's & Dragons War Wizard Build/Guide</h2>
                        <img className="modalImage" src={dndwarwizard} alt="website"></img>
                        <p className="modalDesc">
                            A site to showcase my current DnD character, that displays all the information
                            for race, background, feats, level, and possible strategies. Work in progress..
                        </p>
                        <div className="techContainer">
                            <label className="modalLabels">Vue.js</label>
                            <label className="modalLabels">HTML</label>
                            <label className="modalLabels">CSS</label>
                        </div>
                    </div>
                    
                    <i onClick={() => setShowModal(false)} className='fa-solid fa-xmark closeIcon'></i>
                </div>
            </div>,
        document.getElementById("portal")
        );
    }
    if(selectedIcon==='chart'){
        return ReactDom.createPortal(
            <div className="popout" ref={modalRef} onClick={closeModal}>
                <div className="modal">
                    <div className="modalRow">
                        <h2 className="modalTitle">Pokemon Weakness Chart</h2>
                        <img className="modalImage" src={chart} alt="website"></img>
                        <p className="modalDesc">
                            A website created to display the supereffective types of each Pokemon typing,
                            in a fast and efficient button format. 
                        </p>
                        <div className="techContainer">
                            <label className="modalLabels">React</label>
                            <label className="modalLabels">HTML</label>
                            <label className="modalLabels">CSS</label>
                        </div>
                        <div className="modalLinks">
                            <a href="https://andrewpankoprojects.github.io/Pokemon_Weakness_Chart/" className="modalButton">Link <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://github.com/AndrewPankoProjects/Pokemon_Weakness_Chart" className="modalButton">Link <i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    
                    <i onClick={() => setShowModal(false)} className='fa-solid fa-xmark closeIcon'></i>
                </div>
            </div>,
        document.getElementById("portal")
        );
    }
    if(selectedIcon==='rockpaperscissors'){
        return ReactDom.createPortal(
            <div className="popout" ref={modalRef} onClick={closeModal}>
                <div className="modal">
                    <div className="modalRow">
                        <h2 className="modalTitle">Rock Paper Scissors</h2>
                        <img className="modalImage" src={rockpaperscissors} alt="website"></img>
                        <p className="modalDesc">
                            A website created initially from Python tutorial translated into React..
                            Simple button interaction website to play the game "Rock Paper Scissors"
                            with a computer.
                        </p>
                        <div className="techContainer">
                            <label className="modalLabels">React</label>
                            <label className="modalLabels">HTML</label>
                            <label className="modalLabels">CSS</label>
                        </div>
                        <div className="modalLinks">
                            <a href="https://andrewpankoprojects.github.io/Rock_Paper_Scissors/" className="modalButton">Link <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://github.com/AndrewPankoProjects/Rock_Paper_Scissors" className="modalButton">Link <i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    
                    <i onClick={() => setShowModal(false)} className='fa-solid fa-xmark closeIcon'></i>
                </div>
            </div>,
        document.getElementById("portal")
        );
    }
    if(selectedIcon==='litinfo'){
        return ReactDom.createPortal(
            <div className="popout" ref={modalRef} onClick={closeModal}>
                <div className="modal">
                    <div className="modalRow">
                        <h2 className="modalTitle">Lit Info</h2>
                        <img className="modalImage" src={litinfo} alt="website"></img>
                        <p className="modalDesc">
                            A website created to display all the locations of Hamilton Fire Departments,
                            as well as certain Fire Departments that provide special services. When 
                            locations are interacted with a list directions are generated from your current 
                            location.
                        </p>
                        <div className="techContainer">
                            <label className="modalLabels">Javascript</label>
                            <label className="modalLabels">HTML</label>
                            <label className="modalLabels">CSS</label>
                        </div>
                        <div className="modalLinks">
                            <a href="https://litinfo.github.io/" className="modalButton">Link <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://github.com/LitInfo/LitInfo.github.io" className="modalButton">Link <i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    
                    <i onClick={() => setShowModal(false)} className='fa-solid fa-xmark closeIcon'></i>
                </div>
            </div>,
        document.getElementById("portal")
        );
    }
    if(selectedIcon==='hwi'){
        return ReactDom.createPortal(
            <div className="popout" ref={modalRef} onClick={closeModal}>
                <div className="modal">
                    <div className="modalRow">
                        <h2 className="modalTitle">Hamilton Ward Info</h2>
                        <img className="modalImage" src={hwi} alt="website"></img>
                        <p className="modalDesc">
                            A website created to showcase the various ward information in Hamilton,
                            contributed to the design of the homepage and map section..
                        </p>
                        <div className="techContainer">
                            <label className="modalLabels">Javascript</label>
                            <label className="modalLabels">HTML</label>
                            <label className="modalLabels">CSS</label>
                        </div>
                        <div className="modalLinks">
                            <a href="https://wardinfo.github.io/hamilton/" className="modalButton">Link <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://www.linkedin.com/in/apanko/" className="modalButton">Link <i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    
                    <i onClick={() => setShowModal(false)} className='fa-solid fa-xmark closeIcon'></i>
                </div>
            </div>,
        document.getElementById("portal")
        );
    }
    else{
        return ReactDom.createPortal(
            <div className="popout" ref={modalRef} onClick={closeModal}>
                <div className="modal">
                    <h2>This is a Modal</h2>
                    <i onClick={() => setShowModal(false)} className='fa-solid fa-xmark closeIcon'></i>
                </div>
            </div>,
        document.getElementById("portal")
        );
    }
    
}
