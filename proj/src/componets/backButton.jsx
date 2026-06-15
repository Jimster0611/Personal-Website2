import { useNavigate } from "react-router-dom"
import { useRef } from "react" 
import s from './backButton.module.css'

import hoverSfx from "../assets/audio/hoverOverMenuSelectionsfx.mp3";
import clickSfx from "../assets/audio/clickSelectionsfx.mp3";

export default function BackButton({ to }) {
  const navigate = useNavigate()

  const hoverAudioRef = useRef(new Audio(hoverSfx));
  const clickAudioRef = useRef(new Audio(clickSfx));

  const playHoverSound = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.volume = 1.0;
      hoverAudioRef.current.play().catch(err => console.log("Audio play blocked"));
    }
  }

  const playClickSound = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.volume = 1.0;
      clickAudioRef.current.play().catch(err => console.log("Audio play blocked"));
    }
  }

  return (
    <button 
      className={s.backButton} 
      onMouseEnter={playHoverSound} 
      onClick={() => {
        playClickSound();          
        navigate(to);
      }}
    >
        Back
    </button>
  )
}