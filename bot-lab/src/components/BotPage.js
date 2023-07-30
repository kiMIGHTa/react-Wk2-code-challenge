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
  
    return ( 
        <div>
         <Route path={`${match.url}/:botId`}>
          <BotArmy bots={yourBots}/>
          </Route>
          <Route path={`${match.url}`}>
            <h2>Render Bot above</h2>
            <BotList bots={bots} handleAddBot={addBot}/>
          </Route>

         
          
        </div>
    )
}

export default BotPage