import { Link } from "react-router-dom"
import '../css/sideProjects.module.css'
import s from '../css/sideProjects.module.css'
import BackButton from '../componets/backButton'
import bgVideo from "../assets/vids/sideProjBG.mp4";

export function SideProjects()
{
    return (
        <div>
            <video src = {bgVideo} autoPlay loop muted className = {s.bgVideo}/>

            <h1> sideProject section </h1>









            <BackButton to="/" />
        </div>
    )
}