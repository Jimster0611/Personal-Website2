import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import s from '../css/journal.module.css'
import bgVideo2 from "../assets/vids/JournalBg2.mp4";

import BackButton from '../componets/backButton'
import hoverSfx from "../assets/audio/hoverOverMenuSelectionsfx.mp3";
import clickSfx from "../assets/audio/clickSelectionsfx.mp3"; 

const ENTRIES = {
  0: "The Beginning.",
  1: "smth smth day 1",
  2: "smth smth text for day 2",
  3: "Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...",
  4: "Journal - Unknown\n\nParagraph one...",
  5: "Journal - Unknown\n\nParagraph one...",
  6: "Journal - Unknown\n\nParagraph one...",
  7: "Journal - Unknown\n\nParagraph one...",
  8: "Journal - Unknown\n\nParagraph one...",
  9: "Journal - Unknown\n\nParagraph one...",
  9999: "The End?",
}

export function Journal()
{
    const [selected, setSelected] = useState("0") 
    const [hovered, setHovered] = useState(null)
    
    const hoverAudioRef = useRef(new Audio(hoverSfx));
    const clickAudioRef = useRef(new Audio(clickSfx)); 

    const playHoverSound = () => {
        if (hoverAudioRef.current) {
            hoverAudioRef.current.currentTime = 0; 
            hoverAudioRef.current.volume = 1.0;     
            hoverAudioRef.current.play().catch(err => {
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
        
    return (
        <div className = {s.main}>
            <video src = {bgVideo2} preload="auto" autoPlay loop muted className = {s.bgVideo}/>

            {/*Below chunk is our buttons section to the left of screen*/}
            <div className={s.buttonsWrapper}>
                <div className={s.buttonsContainer}>
                    {Array.from({ length: 101 }, (_, i) => (
                        <button 
                            key={i} 
                            className={s.button} 
                            onMouseEnter={() => handleMouseEnter(String(i))}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => {
                                setSelected(String(i));
                                playClickSound();
                            }}
                        >
                            {i}
                        </button>
                    ))}
                </div>
            </div>

            {/*Below chunk is our text section to the right of screen*/}
            <div className={s.journalPanel}>
                 <p>{ENTRIES[selected] || "No journal record found for this entry point."}</p>
            </div>

            <BackButton to="/aboutme" />
        </div>
    )
}