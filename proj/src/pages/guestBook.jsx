import { Link } from "react-router-dom"
import s from '../css/guestBook.module.css'
import { useState, useRef } from "react"

import bgVideo1 from "../assets/vids/guestBookBg.mp4";
import hoverSfx from "../assets/audio/hoverOverMenuSelectionsfx.mp3";
import clickSfx from "../assets/audio/clickSelectionsfx.mp3";
import BackButton from '../componets/backButton'


export function GuestBook()
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
            <video src = {bgVideo1} autoPlay loop muted className = {s.bgVideo}/>
            

                
            <BackButton to="/" />
        </div>

    )
}