import { Link } from "react-router-dom"
import s from '../css/guestBook.module.css'
import { useState, useRef, useEffect, useLayoutEffect } from "react"

import bgVideo1 from "../assets/vids/guestBookBg.mp4";
import hoverSfx from "../assets/audio/hoverOverMenuSelectionsfx.mp3";
import clickSfx from "../assets/audio/clickSelectionsfx.mp3";
import BackButton from '../componets/backButton'


import { supabase } from "../api";

export function GuestBook()
{
    const [hovered, setHovered] = useState(null)
    const hoverAudioRef = useRef(new Audio(hoverSfx));
    const playHoverSound = () => {
        if (hoverAudioRef.current) {
            hoverAudioRef.current.currentTime = 0; // Rewind to start so fast hovering works
            hoverAudioRef.current.volume = 1.0;     // Adjust volume (0.0 to 1.0) to not blast ears
            hoverAudioRef.current.play().catch(err => {
                // Audio play can occasionally be blocked by browsers if user hasn't clicked anything yet
                console.log("Audio play blocked until user interaction.");
            });
        }
    }
    
    const handleMouseEnter = (projKey) => {
        setHovered(projKey);
        playHoverSound(); 
    }
    const playClickSound = () => {
            if (clickAudioRef.current) {
                clickAudioRef.current.currentTime = 0;
                clickAudioRef.current.volume = 1.0; 
                clickAudioRef.current.play().catch(err => console.log("Click audio blocked"));
            }
        }
    const clickAudioRef = useRef(new Audio(clickSfx)); 

    //Below chunck is the backend connection to supabase
    const[users,setUsers] = useState([]);
    const[user,setUser] = useState({
        Name: "", Note: ""
    })
    console.log(users)

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
    const {data} = await supabase
        .from('users')
        .select("*")
        .order('id', { ascending: true });  
        setUsers(data)
    }
    
    function handleChange(e) {
        
    }
    return (
        <div className = {s.main}>
            <video src = {bgVideo1} autoPlay loop muted className = {s.bgVideo}/>
            
            <input 
            type="text"
            placeholder="Name"
            name="Name (can be anonymous)"
            onChange={handleChange}
            />

            <table>
                <thead>
                    <tr> 
                        <th> ID </th>
                        <th> Name </th>
                        <th> Age </th>

                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                    <tr 
                        key={user.id} 
                        onMouseEnter={() => handleMouseEnter(user.id)} 
                        onClick={playClickSound}
                    >
                        <td>{user.id}</td>
                        {/* Bracket notation handles spaces & parentheses in JSON keys safely */}
                        <td>{user["Name (can be anonymous)"] || "Anonymous"}</td>
                        <td>{user.Notes || "—"}</td>
                    </tr>
                ))}
                </tbody>
            </table>

                
            <BackButton to="/" />
        </div>

    )
}