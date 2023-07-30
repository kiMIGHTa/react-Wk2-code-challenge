import { useParams } from "react-router-dom"

function BotArmy({bots}){
    const params = useParams()
    console.log(params.botId);

    const myBots = bots.map((bot)=>{
      return (
        <div key={bot.id}>
        <img src={bot.avatar_url} alt={bot.name}/>
        <h2>{bot.name}</h2>
        <h3>{bot.bot_class}</h3>
        <p>health: {bot.health}</p>
        <p>damage: {bot.damage}</p>
        <p>armor: {bot.armor}</p>
        </div>
      )
    })


    
    return(
        <div>
          {myBots}
        </div>
    )
}

export default BotArmy