import { useMemo } from "react";
import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import s from '../css/homeMenu.module.css'

import hoverSfx from "../assets/audio/hoverOverMenuSelectionsfx.mp3";
import clickSfx from "../assets/audio/clickSelectionsfx.mp3"; 

import bgVideo from "../assets/vids/mainMenuBG.mp4";
//import resume from "../assets/pics/Resume.pdf";

export function HomeMenu()
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