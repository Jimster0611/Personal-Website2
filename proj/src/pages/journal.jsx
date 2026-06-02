import { Link } from "react-router-dom"
import { useState } from "react"
import s from '../css/journal.module.css'
import bgVideo from "../assets/vids/journalBG.mp4";
import bgVideo2 from "../assets/vids/JournalBg2.mp4";

const ENTRIES = {
  0: "The Beginning.",
  1: "smth smth day 1",
  2: "smth smth text for day 2",
  3: "Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...Journal - Renoir\nay 3 text and stuff one...",
  4: "Journal - Unknown\n\nParagraph one...",
  5: "Journal - Unknown\n\nParagraph one...",
  6: "Journal - Unknown\n\nParagraph one...",
  7: "Journal - Unknown\n\nParagraph one...",
  8: "Journal - Unknown\n\nParagraph one...",
  9: "Journal - Unknown\n\nParagraph one...",
  9999: "The End?",
}

export function Journal()
{
    const [selected, setSelected] = useState("0") 

    return (
        <div className = {s.main}>
            <video src = {bgVideo2} autoPlay loop muted className = {s.bgVideo}/>

            {/*Below chunk is our buttons section to the left of screen*/}
            <div className={s.buttonsWrapper}>
                <div className={s.buttonsContainer}>
                    {Array.from({ length: 101 }, (_, i) => (
                        <button key={i} className={s.button} onClick={() => setSelected(String(i))}>
                            {i}
                        </button>
                    ))}
                </div>
            </div>

            {/*Below chunk is our text section to the right of screen*/}
            <div className={s.journalPanel}>
                 <p>{ENTRIES[selected]}</p>
            </div>

        </div>

    )
}