import BotList from "./BotList"
import BotArmy from "./BotArmy";
import {Route, useRouteMatch} from "react-router-dom"
import { useState, useEffect } from "react";

function BotPage(){
    const match = useRouteMatch()

    const [bots, setBots]= useState([])
    const [yourBots, setYourBots] = useState([])


    useEffect(()=>{
      fetch(" http://localhost:3000/bots")
      .then((r)=>r.json())
      .then((data)=> setBots(data))
    },[])

    const addBot = (bot) => {
      if (!yourBots.includes(bot)) {
        setYourBots([...yourBots, bot])
      }
    }

    const removeBot = (bot) => {
      setYourBots(yourBots.filter((yourBot) => yourBot.id !== bot.id))
    }
  
    return ( 
        <div>
         <Route path={`${match.url}/:botId`}>
          <BotArmy bots={yourBots} handleRemoveBot={removeBot}/>
          </Route>
          <Route path={`${match.url}`}>
            <h2>Render Bot above</h2>
            <BotList bots={bots} handleAddBot={addBot}/>
          </Route>

         
          
        </div>
    )
}

export default BotPage