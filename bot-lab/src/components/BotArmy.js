import './BotArmy.css'
function BotArmy({bots ,handleRemoveBot}){
   
    const myBots = bots.map((bot)=>{
      return (
        <div key={bot.id} className="botArmy" onClick={()=>handleRemoveBot(bot)}>
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