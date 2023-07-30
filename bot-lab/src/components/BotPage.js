import BotList from "./BotList"
import BotArmy from "./BotArmy";
import {Route, useRouteMatch} from "react-router-dom"

function BotPage({bots}){
    const match = useRouteMatch()
    return ( 
        <div>
         <Route path={`${match.url}/:botId`}>
          <BotArmy bots={bots}/>
          </Route>
          <Route path={`${match.url}`}>
            <h2>Render Bot above</h2>
          </Route>

          <BotList bots={bots}/>
          
        </div>
    )
}

export default BotPage