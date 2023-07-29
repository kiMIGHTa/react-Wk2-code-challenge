import './App.css';
import { useState, useEffect } from 'react';
import BotPage from './components/BotPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [bots, setBots]= useState([])

  useEffect(()=>{
    fetch(" http://localhost:3000/bots")
    .then((r)=>r.json())
    .then((data)=> setBots(data))
  },[])

  return (
    <div>
      <Switch>
      <Route path='/bots'>
        <BotPage bots={bots}/>
     </Route>
     </Switch>
    </div>
  )
}

export default App;
