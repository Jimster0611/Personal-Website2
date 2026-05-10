import s from './App.module.css'

//import { Button } from './componets/Button'
import { useState, useEffect, useRef} from "react";
import bgSound from "./assets/audio/bgOST.mp3";


import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutMe } from './pages/aboutMe'
import { HomeMenu } from './pages/homeMenu'
import { SideProjects } from './pages/sideProjects'

function App() {
    const [toggled, setToggled] = useState(false);
    const audioRef = useRef(new Audio(bgSound));

    useEffect(() => {
        const song = audioRef.current;
        song.loop = true;
        (toggled) ? song.play() : song.pause();
    }, [toggled]);

    return(
        <Router>
            <button onClick={() => setToggled(!toggled)} className={`${s.bgOst} ${toggled ? "toggled" : ""}`}>
                {toggled ? "Pause Music" : "Play Music"}
            </button>
            
            <Routes>
                <Route path = "/" element = {<HomeMenu/>}/>
                <Route path = "/aboutme" element = {<AboutMe/>}/>
                <Route path = "/sideprojects" element = {<SideProjects/>}/>
            </Routes>
        </Router>
    )
}

export default App
