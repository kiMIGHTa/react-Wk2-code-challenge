import { Link } from "react-router-dom"

function BotItem({botId, image, name}){
    return(
        <li>
            <Link to={`/bots/${botId}`}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            </Link>
        </li>
    )
}

export default BotItem