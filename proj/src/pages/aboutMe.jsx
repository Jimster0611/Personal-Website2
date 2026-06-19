import { Link } from "react-router-dom"
import s from '../css/aboutMe.module.css'
import { useState, useRef } from "react"

import bgVideo1 from "../assets/vids/aboutmeBG.mp4";
import hoverSfx from "../assets/audio/hoverOverMenuSelectionsfx.mp3";
import clickSfx from "../assets/audio/clickSelectionsfx.mp3";
import BackButton from '../componets/backButton'



export function AboutMe()
{
    const [hovered, setHovered] = useState(null)
    const hoverAudioRef = useRef(new Audio(hoverSfx));
    const playHoverSound = () => {
        if (hoverAudioRef.current) {
            hoverAudioRef.current.currentTime = 0; // Rewind to start so fast hovering works
            hoverAudioRef.current.volume = 1.0;     // Adjust volume (0.0 to 1.0) to not blast ears
            hoverAudioRef.current.play().catch(err => {
                // Audio play can occasionally be blocked by browsers if user hasn't clicked anything yet
                console.log("Audio play blocked until user interaction.");
            });
        }
    }
    
    const handleMouseEnter = (projKey) => {
        setHovered(projKey);
        playHoverSound(); 
    }
    const playClickSound = () => {
            if (clickAudioRef.current) {
                clickAudioRef.current.currentTime = 0;
                clickAudioRef.current.volume = 1.0; 
                clickAudioRef.current.play().catch(err => console.log("Click audio blocked"));
            }
        }
    const clickAudioRef = useRef(new Audio(clickSfx)); 

    return (
        <div className = {s.main}>
            <video src = {bgVideo1} preload="auto" autoPlay loop muted className = {s.bgVideo}/>
            {/*Below will be the link tree nav bar */}
            <div className = {s.linksContainer}>
                <div className = {s.listHeader} style={{ transform: ' translate(-8%)' }}>
                    LIST
                </div>
                
                <Link to="/journal" className = {s.specLinks}
                    onMouseEnter={() => handleMouseEnter('journal')} //note to self, with code here it could display lil text box to the right or smth
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    <span className={s.badge}>I</span>
                    Journal 
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(8%)' }}
                    onMouseEnter={() => handleMouseEnter('gymProgress')} 
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    <span className={s.badge}>II</span>
                    Gym Progress
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(16%)' }}
                    onMouseEnter={() => handleMouseEnter('fashion')} 
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    <span className={s.badge}>III</span>
                    Fashion
                </Link>

                <Link to="/guestBook" className = {s.specLinks} style={{ transform: ' translate(24%)' }}
                    onMouseEnter={() => handleMouseEnter('guestBook')} 
                    onClick={playClickSound}>
                    <span className={s.badge}>IV</span>
                    Guest Book
                </Link>

                <Link to="/aboutme" className = {s.specLinks}style={{ transform: ' translate(32%)' }}
                    onMouseEnter={() => handleMouseEnter('easterEgg')} 
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    <span className={s.badge}>V</span>
                    Easter Egg
                </Link>

                {/*

                for the hidden easter egg, could hide some cool encryption somwhere in the code or log
                for other pple who wants to find it, also offering 3 hints

                for the random rants
                format them in a cliar obscur expedition journal style
                Journal - 
                */}
                <Link to="/aboutme" className = {s.specLinks}style={{ transform: ' translate(40%)' }}
                    onMouseEnter={() => handleMouseEnter('easterEgg')} 
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    <span className={s.badge}>VI</span>
                    Credits
                </Link>

                <BackButton to="/" />
            </div>
        </div>

    )
}