import { useMemo } from "react";
import { Link } from "react-router-dom"
import s from '../css/homeMenu.module.css'


import bgVideo from "../assets/vids/mainMenuBG.mp4";
//import resume from "../assets/pics/Resume.pdf";

export function HomeMenu()
{

    return (
        <div className = {s.main}>
            <video src = {bgVideo} autoPlay loop muted className = {s.bgVideo}/>

            <div className = {s.linksContainer}>
                <a href= "/My_Resume.pdf"
                    download ="Jimmy's Resume.pdf"
                    className = {s.specLinks} target = "_blank"
                    style={{ transform: 'translate(-10%) rotate(-25deg) skewX(-15deg)', color: "lightskyblue"}}>
                    Resume 
                </a>

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

                <Link to="/sideprojects" 
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