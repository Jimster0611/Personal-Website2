import { Link, useNavigate } from "react-router-dom"
import { useMemo, useState, useRef, useEffect } from "react";
import s from '../css/loadingScreen.module.css'
import hoverSfx from "../assets/audio/hoverOverMenuSelectionsfx.mp3";
import clickSfx from "../assets/audio/clickSelectionsfx.mp3"; 

import bgVideo from "../assets/vids/mainMenuBG.mp4";

export function LoadingScreen()
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

    //below chunck is loading screen code
    const [percent, setPercent] = useState(0)
    const [ready, setReady] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const duration = 5000;
        const start = performance.now();
        let frameId;

        const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setPercent(Math.round(progress * 100));

            if (progress < 1) {
                frameId = requestAnimationFrame(tick);
            } else {
                setReady(true); // bar's done, now just wait for input
            }
        };

        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, []);

    const handleContinue = () => {
        playClickSound();
        navigate("/homeMenu");
    }


    return (
        <div className={s.main} onClick={handleContinue}>
            <div className={s.loader}>
                <div className={s.label}>LOADING <span className={s.dots}>.....</span></div>
                <div className={s.barOuter}>
                    <div className={s.barInner} style={{ width: `${percent}%` }} />
                </div>
                <div className={s.percent}>{percent}%</div>
            </div>
        </div>
    )
}