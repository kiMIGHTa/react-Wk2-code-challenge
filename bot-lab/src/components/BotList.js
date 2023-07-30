import { Link } from "react-router-dom"
function BotList({bots, handleAddBot}){
    
       const renderBots =  bots.map((bot)=>{
           return (
           <li key={bot.id} onClick={()=>handleAddBot(bot)}>
           <Link to={`/bots/${bot.id}`}>
           <img src={bot.image} alt={bot.name}/>
           <h3>{bot.name}</h3>
           <small>{bot.catchphrase}</small>
           </Link>
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