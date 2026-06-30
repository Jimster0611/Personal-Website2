import { Link } from "react-router-dom"
import s from '../css/aboutMe.module.css'
import { useState, useRef } from "react"

import bgVideo1 from "../assets/vids/aboutmeBG.mp4";
import { useHoverClickSFX } from "../hooks/hover_clickSFX";
import BackButton from '../componets/backButton'



export function AboutMe()
{
    const [hovered, setHovered] = useState(null)
    const { playHoverSound, playClickSound } = useHoverClickSFX();
    const handleMouseEnter = (projKey) => {
        setHovered(projKey);
        playHoverSound(); 
    }


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

                <BackButton to="/homeMenu" />
            </div>
        </div>

    )
}