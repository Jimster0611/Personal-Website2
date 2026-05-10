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
                <div className = {s.listHeader} style={{ transform: ' translate(-12%)' }}>
                    LIST
                </div>
                
                <Link to="/" className = {s.specLinks}>
                    Resume....... 
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(12%)' }}>
                    Side Projects
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(24%)' }}>
                    Side Projects
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(36%)' }}>
                    stuff
                </Link>

                <Link to="/aboutme" className = {s.specLinks}style={{ transform: ' translate(48%)' }}>
                    About Me 
                </Link>
            </div>
        </div>

    )
}