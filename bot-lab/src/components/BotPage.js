import BotList from "./BotList"
import {useRouteMatch} from "react-router-dom"

function BotPage({bots}){
    const match = useRouteMatch()
    console.log(match);
    return ( 
        <div>
            <BotList bots={bots}/>
            <Route path={`${match.url}/:botId`}>
                <BotArmy bots={bots}/>
            </Route>

        </div>
    )
}

export default BotPage