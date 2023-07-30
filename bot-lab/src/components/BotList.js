import BotItem from "./BotItem"

function BotList({bots, handleAddBot}){
    
       const renderBots =  bots.map((bot)=>{
           return <BotItem key={bot.id} botId={bot.id} bot={bot} addFunction={handleAddBot}/>
        })

    return (
        <div>
            <ul>
            {renderBots}
            </ul>
        </div>
    )

}

export default BotList