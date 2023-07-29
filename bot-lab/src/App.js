import './App.css';
import { useState, useEffect } from 'react';
import BotPage from './components/BotPage';

function App() {
  const [bots, setBots]= useState()

  useEffect(()=>{
    fetch(" http://localhost:3000/bots")
    .then((r)=>r.json())
    .then((data)=> setBots(data))
  },[])

  return (
    <div>
      <BotPage bots={bots}/>
    </div>
  )
}

export default App;
