import { Link } from "react-router-dom"
import s from '../css/aboutMe.module.css'

import bgVideo1 from "../assets/vids/main1.mp4";

export function AboutMe()
{
    return (
        <div className = {s.main}>
            <video src = {bgVideo1} autoPlay loop muted className = {s.bgVideo}/>
            {/*Below will be the link tree nav bar */}
            <div className = {s.linksContainer}>
                <Link to="/" className = {s.specLinks} style={{ transform: 'translate(25%) rotate(-5deg) skewX(-15deg)' }}>
                    Resume 
                </Link>

                <a href="https://github.com/Jimster0611" className = {s.specLinks} target = "_blank" style={{ transform: 'translate(-25%) rotate(5deg) skewX(-15deg)' }}>
                    GitHub
                </a>

                <a href="http://www.linkedin.com/in/jimmy-chau123" className = {s.specLinks} target = "_blank" style={{ transform: ' translate(25%) rotate(-5deg) skewX(-15deg)' }}>
                    Linkedln
                </a>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: 'translate(-25%) rotate(5deg) skewX(-15deg)' }}>
                    Side Projects
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: 'translate(25%) rotate(-5deg) skewX(-15deg)' }}>
                    About Me 
                </Link>
            </div>
        </div>

    )
}