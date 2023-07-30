import BotItem from "./BotItem"

function BotList({bots}){
    
       const renderBots =  bots.map((bot)=>{
           return <BotItem key={bot.id} botId={bot.id} image={bot.avatar_url} name={bot.name}/>
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