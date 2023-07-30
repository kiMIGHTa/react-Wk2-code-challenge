function BotList({bots, handleAddBot}){
    
       const renderBots =  bots.map((bot)=>{
           return (
           <li key={bot.id} onClick={()=>handleAddBot(bot)}>
           <img src={bot.image} alt={bot.name}/>
           <h3>{bot.name}</h3>
           <small>{bot.catchphrase}</small>
           </li>
       )})

    return (
        <div>
            <ul>
            {renderBots}
            </ul>
        </div>
    )

}

export default BotList