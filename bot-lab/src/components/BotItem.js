

function BotItem({image, name}){
    return(
        <li>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
        </li>
    )
}

export default BotItem