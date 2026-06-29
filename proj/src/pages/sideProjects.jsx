import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import s from '../css/sideProjects.module.css'
import BackButton from '../componets/backButton'
import bgVideo from "../assets/vids/sideProjBG3.mp4";

import hoverSfx from "../assets/audio/hoverOverMenuSelectionsfx.mp3";
import clickSfx from "../assets/audio/clickSelectionsfx.mp3"; 

const previews = {
  proj_1:   { title: "Personal Website",          
              desc: "A sleek, responsive portfolio website built using React, Vite, and modular CSS to showcase my technical projects and creative work." },

  proj_2:   { title: "3D Java Shooter",  
              desc: "A 3D " }, 

  proj_3:   { title: "Fashion",          
              desc: "A curated lookbook and styling tool with outfit combinations." },

  proj_4:   { title: "Guest Book",       
              desc: "Leave a message. A digital guestbook for visitors of this site." },
}

export function SideProjects()
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
        <div>
            <video src = {bgVideo} preload="auto" autoPlay loop muted className = {s.bgVideo}/>


            <div className = {s.linksContainer}>
                <div className = {s.listHeader} style={{ transform: ' translate(-8%)' }}>
                    Projects
                </div>
                
                <Link to="/sideProj1" className = {s.specLinks}
                    onMouseEnter={() => handleMouseEnter('proj_1')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    <span className={s.badge}>I</span>

                    Personal Website 
                </Link>

                <Link to="/sideprojects" className = {s.specLinks} style={{ transform: ' translate(8%)' }}
                    onMouseEnter={() => handleMouseEnter('proj_2')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    <span className={s.badge}>II</span>

                    3d Jave Shooter
                </Link>

                <Link to="/sideprojects" className = {s.specLinks} style={{ transform: ' translate(16%)' }}
                    onMouseEnter={() => handleMouseEnter('proj_3')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    <span className={s.badge}>III</span>
                    Fashion
                </Link>

                <Link to="/sideprojects" className = {s.specLinks} style={{ transform: ' translate(24%)' }}
                    onMouseEnter={() => handleMouseEnter('proj_4')}
                    onMouseLeave={() => setHovered(null)}
                    onClick={playClickSound}>
                    <span className={s.badge}>IV</span>
                    Guest Book
                </Link>
            </div>

            <div className={`${s.previewPanel} ${hovered ? s.previewVisible : ''}`}>
                {hovered && (
                    <>
                        <p className={s.previewTitle}>{previews[hovered].title}</p>
                        <p className={s.previewDesc}>{previews[hovered].desc}</p>
                    </>
                )}
            </div>

            <BackButton to="/" />
        </div>
    )
}