import { Link } from "react-router-dom"

function BotItem({botId, bot, addFunction}){
    return(
        <li onClick={()=>addFunction(bot)}>
            <Link to={`/bots/${botId}`}>
            <img src={bot.image} alt={bot.name}/>
            <h3>{bot.name}</h3>
            </Link>
        </li>
    )
}

export default BotItem