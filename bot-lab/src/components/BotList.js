import './BotList.css'
function BotList({bots, handleAddBot, removeBot}){

    
    
       const renderBots =  bots.map((bot)=>{
           return (
           <li key={bot.id} className='BotList' >
            <div className="botCard">
           <img src={bot.image} alt={bot.name}/>
           <h3>{bot.name}</h3>
           <small>{bot.catchphrase}</small>
           <button onClick={()=>handleAddBot(bot)}>Add to army</button>
           <button onClick={()=>removeBot(bot)}>X</button>
           </div>
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