import { Link } from "react-router-dom"
import s from '../css/journal.module.css'
import bgVideo from "../assets/vids/journalBG.mp4";

export function Journal()
{

    return (
        <div className = {s.main}>
            <video src = {bgVideo} autoPlay loop muted className = {s.bgVideo}/>

            <div className = {s.buttonsContainer}>

            </div>
        </div>

    )
}