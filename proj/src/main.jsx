import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*
import './index.css';//Below chunck is our images (to be deleated later)
import shockedbaby from './assets/Images/shockedbaby.png';
import monopoly_money from './assets/Images/monopoly.png';

//Below is our audio (to be deleated later)
import miau_audio from './assets/Audio/montagem_miau.m4a';
import renai_brooklyn from './assets/Audio/Just Landed in Brooklyn × Renai Circulation.m4a';
import fahh from './assets/Audio/fahhh.m4a';


//Below is our videos
import backgroundVid from './assets/Videos/sakura_garden_background.mp4';

function App() {
  //below 3 functions are our audio
  function play_montagem_miau() {
    new Audio(miau_audio).play()
  }
  
  function play_renai_brooklyn() {
    const song = new Audio(renai_brooklyn);
    song.loop = true;
    song.play();
  }
  function play_fahh_sfx() {
    const song = new Audio(fahh);
    song.loop = true;
    song.play();
  }



  return (
    <div className="App">
      <video className = "background-video" src = {backgroundVid} type = "video/mp4" autoPlay loop muted/>
      <div className = "Content">
      <h1>Hello React!</h1>
      <h0> I am wsmall </h0>

      <img src = {monopoly_money} alt = ""/>
      <img src = {shockedbaby} 
          alt = "" 
          style = {{width:'400px', height: 'auto'}}/>
      
      <button onClick = {play_montagem_miau}>
        Press to play montagem miau
      </button>

      <button onClick = {play_renai_brooklyn}>
        Press to play renai brooklyn
      </button>

      <button onClick = {play_fahh_sfx}>
        Press to play FahHh
      </button>
      </div>
    </div>
  );
}
*/