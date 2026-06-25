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
    const [currentUserId, setCurrentUserId] = useState(null);
    const[user,setUser] = useState({
        Name: "", Note: ""
    })
    console.log(users)


    useEffect(() => {
        initAuth();
        fetchUsers();
    }, []);

    async function fetchUsers() {
    const {data} = await supabase
        .from('users')
        .select("*")
        .order('id', { ascending: true });  
        setUsers(data)
    }

    async function initAuth() {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            setCurrentUserId(session.user.id);
        } else {
            const { data, error } = await supabase.auth.signInAnonymously();
            if (error) {
                console.log("Anonymous sign-in failed:", error.message);
            } else {
                setCurrentUserId(data.user.id);
            }
        }
    }
    async function deleteUser(userId){
    const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId)
    
    if (error) {
        console.log("Delete failed:", error.message)
    } else {
        fetchUsers()
    }
    }

    async function createUser(event){
        event.preventDefault();
        await supabase
            .from('users')
            .insert({ Name: user.Name || null, Note: user.Note || null});
        setUser({ Name: "", Note: "" });
        fetchUsers();
    }

        function handleChange(event){
        setUser(prevFormData=>{
            return{
            ...prevFormData,
            [event.target.name]: event.target.value
            }
        })
        }

    return (
        <div className = {s.main}>
            <video src = {bgVideo1} preload="auto" autoPlay loop muted className = {s.bgVideo}/>
            
            <form className = {s.form} onSubmit= {createUser}>
                <input className = {s.formInput}
                    type="text"
                    placeholder="Name (can be anonymous)"
                    name="Name"
                    value={user.Name}
                    onChange={handleChange}
                />
                <textarea className={s.formInput}
                    placeholder="Note"
                    name="Note"
                    value={user.Note}
                    onChange={handleChange}
                />
                
                <button className={s.postButton} type='submit' onMouseEnter={() => handleMouseEnter()}>Post</button>
            </form>

            <div className = {s.scrollBar }>
                <table>
                    <thead>
                        <tr> 
                            <th> # </th>
                            <th> Name </th>
                            <th> Notes </th>
                        </tr>
                    </thead>
                

                    <tbody>
                        {users && users.map((user) => (
                        <tr key = {user.id}>
                            <td>{user.id}</td>
                            <td>{user.Name || "Anonymous"}</td>
                            <td>{user.Note}</td>
                            <td className={user.user_id === currentUserId ? s.actionCell : s.actionCellEmpty}>
                            {user.user_id === currentUserId && (
                                <button className = {s.deleteButton} 
                                onMouseEnter={playHoverSound} 
                                onClick={() => { deleteUser(user.id); playClickSound();}}>
                                    Delete
                                </button>)}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <BackButton to="/" />
        </div>

    )
}