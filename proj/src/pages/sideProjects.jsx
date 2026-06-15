import { Link } from "react-router-dom"
import { useState } from "react"
import '../css/sideProjects.module.css'
import s from '../css/sideProjects.module.css'
import BackButton from '../componets/backButton'
import bgVideo from "../assets/vids/sideProjBG3.mp4";

const previews = {
  proj_1:   { title: "Personal Website",          
              desc: "A sleek, responsive portfolio website built using React, Vite, and modular CSS to showcase my technical projects and creative work." },

  proj_2:   { title: "3D Java Shooter",  
              desc: "A 3D " }, 

  proj_3:   { title: "Fashion",          
              desc: "A curated lookbook and styling tool with outfit combinations." },

  proj_4:   { title: "Guest Book",       
              desc: "Leave a message. A digital guestbook for visitors of this site." },
}

export function SideProjects()
{
    const [hovered, setHovered] = useState(null)

    return (
        <div>
            <video src = {bgVideo} autoPlay loop muted className = {s.bgVideo}/>


            <div className = {s.linksContainer}>
                <div className = {s.listHeader} style={{ transform: ' translate(-8%)' }}>
                    Projects
                </div>
                
                <Link to="/journal" className = {s.specLinks}
                    onMouseEnter={() => setHovered('proj_1')}
                    onMouseLeave={() => setHovered(null)}>
                    <span className={s.badge}>I</span>

                    Personal Website 
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(8%)' }}
                    onMouseEnter={() => setHovered('proj_2')}
                    onMouseLeave={() => setHovered(null)}>
                    <span className={s.badge}>II</span>

                    3d Jave Shooter
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(16%)' }}
                    onMouseEnter={() => setHovered('proj_3')}
                    onMouseLeave={() => setHovered(null)}>
                    <span className={s.badge}>III</span>
                    Fashion
                </Link>

                <Link to="/aboutme" className = {s.specLinks} style={{ transform: ' translate(24%)' }}
                    onMouseEnter={() => setHovered('proj_4')}
                    onMouseLeave={() => setHovered(null)}>
                    <span className={s.badge}>IV</span>
                    Guest Book
                </Link>
            </div>

            <div className={`${s.previewPanel} ${hovered ? s.previewVisible : ''}`}>
                {hovered && (
                    <>
                        <p className={s.previewTitle}>{previews[hovered].title}</p>
                        <p className={s.previewDesc}>{previews[hovered].desc}</p>
                    </>
                )}
            </div>

            <BackButton to="/" />
        </div>
    )
}