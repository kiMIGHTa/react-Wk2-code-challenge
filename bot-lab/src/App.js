import './App.css';
import BotPage from './components/BotPage';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

function App() {


  return (
    <div>
      <Switch>
      <Route path='/bots'>
        <BotPage/>
     </Route>
     <Route path='/'>
        <Home/>
     </Route>
     </Switch>
    </div>
  )
}

export default App;
