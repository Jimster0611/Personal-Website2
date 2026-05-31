import { Link } from "react-router-dom"
import { useState } from "react"
import s from '../css/journal.module.css'
import bgVideo from "../assets/vids/journalBG.mp4";

const ENTRIES = {
  verso: "Journal - Verso\n\nParagraph one...\n\nParagraph two...",
  aline: "Journal - Aline\n\nParagraph one...",
  renoir: "Journal - Renoir\n\nParagraph one...",
  unknown: "Journal - Unknown\n\nParagraph one...",
}

export function Journal()
{
    const [selected, setSelected] = useState("verso") // default to verso

    return (
        <div className = {s.main}>
            <video src = {bgVideo} autoPlay loop muted className = {s.bgVideo}/>

            <div className = {s.buttonsContainer}>
                <button className={s.button} onClick={() => setSelected("verso")}>Verso</button>
                <button className={s.button} onClick={() => setSelected("aline")}>Aline</button>
                <button className={s.button} onClick={() => setSelected("renoir")}>Renoir</button>
                <button className={s.button} onClick={() => setSelected("renoir")}>Renoir</button>
                <button className={s.button} onClick={() => setSelected("renoir")}>Renoir</button>
                <button className={s.button} onClick={() => setSelected("renoir")}>Renoir</button>
                <button className={s.button} onClick={() => setSelected("renoir")}>Renoir</button>
                <button className={s.button} onClick={() => setSelected("renoir")}>Renoir</button>

            </div>

            <div className={s.journalPanel}>
                 <p>{ENTRIES[selected]}</p>
            </div>

        </div>

    )
}