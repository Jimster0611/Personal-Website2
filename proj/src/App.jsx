import s from './css/App.module.css'

import { useState, useEffect, useRef } from "react";
import bgSound from "./assets/audio/bgOST.mp3";

import hoverSfx from "./assets/audio/hoverOverMenuSelectionsfx.mp3";
import clickSfx from "./assets/audio/clickSelectionsfx.mp3";

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutMe } from './pages/aboutMe'
import { HomeMenu } from './pages/homeMenu'
import { SideProjects } from './pages/sideProjects'
import { Journal } from './pages/journal'
import { GuestBook } from './pages/guestBook'

import homeBG from "./assets/vids/mainMenuBG.mp4";  
import aboutBG from "./assets/vids/aboutmeBG.mp4";        
import sideProjectsBG from "./assets/vids/sideProjBG.mp4"; 
import journalBG from "./assets/vids/JournalBg2.mp4";      
import guestBookBG from "./assets/vids/guestBookBg.mp4";  
 
const allVideos = [homeBG, aboutBG, sideProjectsBG, journalBG, guestBookBG];
const preloadedVideos = []; 

function preloadVideo(src) {
    const video = document.createElement("video");
    video.src = src;
    video.preload = "auto";
    video.muted = true;
    video.load(); 
    preloadedVideos.push(video); 
}
function App() {

    const [toggled, setToggled] = useState(false);
    
    const audioRef = useRef(new Audio(bgSound));
    
    const hoverAudioRef = useRef(new Audio(hoverSfx));
    const clickAudioRef = useRef(new Audio(clickSfx));
    
    useEffect(() => {
        preloadVideo(homeBG); // will load this b4 the otehrs hoepfully
        const rest = [aboutBG, sideProjectsBG, journalBG, guestBookBG];
        rest.forEach(preloadVideo);
    }, []);

    const playHoverSound = () => {
        if (hoverAudioRef.current) {
            hoverAudioRef.current.currentTime = 0;
            hoverAudioRef.current.volume = 1.0;
            hoverAudioRef.current.play().catch(err => console.log("Hover sound blocked"));
        }
    }

    const playClickSound = () => {
        if (clickAudioRef.current) {
            clickAudioRef.current.currentTime = 0;
            clickAudioRef.current.volume = 1.0;
            clickAudioRef.current.play().catch(err => console.log("Click sound blocked"));
        }
    }

    useEffect(() => {
        const song = audioRef.current;
        song.loop = true;
        song.volume = 0.5;
        (toggled) ? song.play() : song.pause();
    }, [toggled]);

    return(
        <Router>
            <button 
                onMouseEnter={playHoverSound}
                onClick={() => {
                    playClickSound();
                    setToggled(!toggled);
                }} 
                className={`${s.bgOst} ${toggled ? "toggled" : ""}`}
            >
                {toggled ? "Pause Music" : "Play Music"}
            </button>
            
            <Routes>
                <Route path = "/" element = {<HomeMenu/>}/>
                <Route path = "/aboutme" element = {<AboutMe/>}/>
                <Route path = "/sideprojects" element = {<SideProjects/>}/>
                <Route path="/journal" element={<Journal/>}/> 
                <Route path="/guestBook" element={<GuestBook/>}/> 
            </Routes>
        </Router>
    )
}

export default App