import './BotList.css'
function BotList({bots, handleAddBot}){
    
       const renderBots =  bots.map((bot)=>{
           return (
           <li key={bot.id} className='BotList' onClick={()=>handleAddBot(bot)}>
            <div className="botCard">
           <img src={bot.image} alt={bot.name}/>
           <h3>{bot.name}</h3>
           <small>{bot.catchphrase}</small>
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