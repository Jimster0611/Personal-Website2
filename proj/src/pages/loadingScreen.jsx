import { Link, useNavigate } from "react-router-dom"
import { useMemo, useState, useRef, useEffect } from "react";
import s from '../css/loadingScreen.module.css'

import bgVideo from "../assets/vids/mainMenuBG.mp4";
import { useHoverClickSFX } from "../hooks/hover_clickSFX";

import Typewriter from 'typewriter-effect';

export function LoadingScreen()
{

    const [hovered, setHovered] = useState(null)
    const [percent, setPercent] = useState(0)
    const [ready, setReady] = useState(false)
    const navigate = useNavigate()

    const { playHoverSound, playClickSound } = useHoverClickSFX();

    const handleMouseEnter = (projKey) => {
        setHovered(projKey);
        playHoverSound(); // <-- Works perfectly!
    }

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

                <div className={s.label}>
                    {!ready ? (
                        <Typewriter
                            options={{
                                strings: ['LOADING...'],
                                autoStart: true,
                                loop: true,
                                delay: 'natural',
                                cursor: '_'
                            }}
                        />
                    ) : (
                        <Typewriter
                            options={{
                                strings: ['CLICK ANYWHERE'],
                                autoStart: true,
                                loop: false, 
                                delay: 30,   
                                pauseFor: 3000,
                                cursor: '_'
                            }}
                        />
                    )}
                </div>


                <div className={s.barOuter}>
                    <div className={s.barInner} style={{ width: `${percent}%` }} />
                </div>
                <div className={s.percent}>{percent}%</div>
            </div>
        </div>
    )
}