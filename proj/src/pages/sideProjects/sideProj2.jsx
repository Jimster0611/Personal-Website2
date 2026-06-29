import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import s from '../../css/sideProjects/sideProj2.module.css'
import BackButton from '../../componets/backButton'
import bgVideo from "../../assets/vids/sideProjBgVids/sideProjBg2.mp4";

import hoverSfx from "../../assets/audio/hoverOverMenuSelectionsfx.mp3";
import clickSfx from "../../assets/audio/clickSelectionsfx.mp3";


export function SideProj2()
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


            <BackButton to="/sideprojects" />
        </div>
    )
}