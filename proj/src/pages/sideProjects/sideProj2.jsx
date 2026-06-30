import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import s from '../../css/sideProjects/sideProj2.module.css'
import BackButton from '../../componets/backButton'
import bgVideo from "../../assets/vids/sideProjBgVids/sideProjBg2.mp4";

import { useHoverClickSFX } from "../../hooks/hover_clickSFX";


export function SideProj2()
{
    const [hovered, setHovered] = useState(null)
    const { playHoverSound, playClickSound } = useHoverClickSFX();


    return (
        <div>
            <video src = {bgVideo} preload="auto" autoPlay loop muted className = {s.bgVideo}/>


            <BackButton to="/sideprojects" />
        </div>
    )
}