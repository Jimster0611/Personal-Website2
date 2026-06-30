import { useMemo } from "react";
import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import s from '../css/homeMenu.module.css'

import { useHoverClickSFX } from "../hooks/hover_clickSFX";
import bgVideo from "../assets/vids/mainMenuBG.mp4";
//import resume from "../assets/pics/Resume.pdf";

export function HomeMenu()
{
    const [hovered, setHovered] = useState(null)
    const { playHoverSound, playClickSound } = useHoverClickSFX();

    const handleMouseEnter = (projKey) => {
        setHovered(projKey);
        playHoverSound(); 
    }

    return (
        <div className = {s.main}>
            <video src = {bgVideo} preload="auto" autoPlay loop muted className = {s.bgVideo}/>

            <div className = {s.linksContainer}>
                <a href= "/My_Resume.pdf"
                    download ="Jimmy's Resume.pdf"
                    className = {s.specLinks} target = "_blank"
                    style={{ transform: 'translate(-10%) rotate(-25deg) skewX(-15deg)', color: "lightskyblue"}}
                    onMouseEnter={() => handleMouseEnter('resume')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    Resume 
                </a>

                <a href="https://github.com/Jimster0611" 
                    className = {s.specLinks} target = "_blank" 
                    style={{ transform: 'translate(0%) rotate(-15deg) skewX(-15deg)' }}
                    onMouseEnter={() => handleMouseEnter('resume')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    GitHub
                </a>

                <a href="http://www.linkedin.com/in/jimmy-chau123" 
                    className = {s.specLinks} target = "_blank" 
                    style={{ transform: ' translate(0%) rotate(-8deg) skewX(-15deg)', color: "lightskyblue" }}
                    onMouseEnter={() => handleMouseEnter('resume')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    Linkedln
                </a>

                <Link to="/sideprojects" 
                    className = {s.specLinks} 
                    style={{ transform: 'translate(0%) rotate(4deg) skewX(-15deg)' }}
                    onMouseEnter={() => handleMouseEnter('aboutme')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    Side Projects
                </Link>

                <Link to="/aboutme" 
                    className = {s.specLinks} 
                    style={{ transform: 'translate(0%) rotate(8deg) skewX(-15deg)', color: "lightskyblue" }}
                    onMouseEnter={() => handleMouseEnter('aboutme')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    About Me 
                </Link>
            </div>
        </div>

    )
}