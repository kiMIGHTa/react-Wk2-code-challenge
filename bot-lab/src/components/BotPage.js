import BotList from "./BotList"
import BotArmy from "./BotArmy";
import { useState, useEffect } from "react";

function BotPage(){

    const [bots, setBots]= useState([])
    const [yourBots, setYourBots] = useState([])


    useEffect(()=>{
      fetch(" http://localhost:3000/bots")
      .then((r)=>r.json())
      .then((data)=> setBots(data))
    },[])

    function deleteBotFromServer(bot){
      fetch(`http://localhost:3000/bots/${bot.id}`, {
          method: "DELETE",
        })
        .then(()=>deleteBot(bot))
      
  }

    const addBot = (bot) => {
      if (!yourBots.includes(bot)) {
        setYourBots([...yourBots, bot])
      }
    }

    const removeBot = (bot) => {
      setYourBots(yourBots.filter((yourBot) => yourBot.id !== bot.id))
    }

    function deleteBot (deletedBot){
      const botsToDisplay = bots.filter((bot)=> bot.id !==deletedBot.id)
      setBots(botsToDisplay)
    }
  
    return ( 
        <div>
          <BotArmy bots={yourBots} handleRemoveBot={removeBot}/>
            <h2>Your Bot Army</h2>
            <BotList bots={bots} handleAddBot={addBot} removeBot={deleteBotFromServer}/>
        </div>
    )
}

export default BotPage