import { useMemo } from "react";
import { Link } from "react-router-dom"
import s from '../css/homeMenu.module.css'


import bgVideo1 from "../assets/vids/mainMenuBG.mp4";
import bgVideo2 from "../assets/vids/main1.mp4";

export function HomeMenu()
{
    const selectedVideo = useMemo(() => {
        const videos = [bgVideo1, bgVideo1];
        //alter bgVideo1 to 2 once i've found a another good bgvid
        return videos[Math.floor(Math.random() * videos.length)];
    }, []);
    return (
        <div className = {s.main}>
            <video src = {selectedVideo} autoPlay loop muted className = {s.bgVideo}/>

            <div className = {s.linksContainer}>
                <Link to="/aboutme" 
                    className = {s.specLinks} 
                    style={{ transform: 'translate(-10%) rotate(-25deg) skewX(-15deg)', color: "lightskyblue"}}>
                    Resume 
                </Link>

                <a href="https://github.com/Jimster0611" 
                    className = {s.specLinks} target = "_blank" 
                    style={{ transform: 'translate(0%) rotate(-15deg) skewX(-15deg)' }}>
                    GitHub
                </a>

                <a href="http://www.linkedin.com/in/jimmy-chau123" 
                    className = {s.specLinks} target = "_blank" 
                    style={{ transform: ' translate(0%) rotate(-8deg) skewX(-15deg)', color: "lightskyblue" }}>
                    Linkedln
                </a>

                <Link to="/aboutme" 
                    className = {s.specLinks} 
                    style={{ transform: 'translate(0%) rotate(4deg) skewX(-15deg)' }}>
                    Side Projects
                </Link>

                <Link to="/aboutme" 
                    className = {s.specLinks} 
                    style={{ transform: 'translate(0%) rotate(8deg) skewX(-15deg)', color: "lightskyblue" }}>
                    About Me 
                </Link>
            </div>
        </div>

    )
}