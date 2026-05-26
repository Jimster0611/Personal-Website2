import { Link } from "react-router-dom"
import s from '../css/aboutMe.module.css'
//import useSound from 'use-sound';

import bgVideo1 from "../assets/vids/main1.mp4";
import hoverSFX from "../assets/audio/hoverOverMenuSelectionsfx.mp3";


/*
const HoverSoundButton = () => {
  const [play] = useSound(hoverSFX);
}
onMouseEnter={play}
*/
export function AboutMe()
{
    
    return (
        <div className = {s.main}>
            <video src = {bgVideo1} autoPlay loop muted className = {s.bgVideo}/>
            {/*Below will be the link tree nav bar */}
            <div className = {s.linksContainer}>
                <div className = {s.listHeader} style={{ transform: ' translate(-8%)' }}>
                    LIST
                </div>
                
                <Link to="/" className = {s.specLinks}>
                    <span className={s.badge}>I</span>
                    Gym Progress 
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(8%)' }}>
                    <span className={s.badge}>II</span>
                    Yippy Yappff
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(16%)' }}>
                    <span className={s.badge}>III</span>
                    L3
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(24%)' }}>
                    <span className={s.badge}>IV</span>
                    L4
                </Link>

                <Link to="/aboutme" className = {s.specLinks}style={{ transform: ' translate(32%)' }}>
                    <span className={s.badge}>V</span>
                    L5 
                </Link>

                <Link to="/aboutme" className = {s.specLinks}style={{ transform: ' translate(40%)' }}>
                    <span className={s.badge}>VI</span>
                    L6 
                </Link>
            </div>
        </div>

    )
}