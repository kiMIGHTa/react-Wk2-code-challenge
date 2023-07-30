import './BotList.css'
function BotList({bots, handleAddBot, deleteBot}){

    function deleteBot(bot){
        fetch(`http://localhost:3000/bots/${bot.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(()=>deleteBot(bot))
        
    }
    
       const renderBots =  bots.map((bot)=>{
           return (
           <li key={bot.id} className='BotList' onClick={()=>handleAddBot(bot)}>
            <div className="botCard">
           <img src={bot.image} alt={bot.name}/>
           <h3>{bot.name}</h3>
           <small>{bot.catchphrase}</small>
           </div>
           <button onClick={()=>deleteBot(bot)}>X</button>
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