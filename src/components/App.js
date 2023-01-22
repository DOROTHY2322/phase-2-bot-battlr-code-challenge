import React,{useState} from 'react';
import './App.css';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';


function App() {
  const [selectedBots, setSelectedBots] = useState([]);

  return (
    <div>
        <h2 className="navbar bg-dark navbar-brand text-react text-light nav-link active text-light">ROBOT ARMY</h2>
        <BotCollection selectedBots={selectedBots} setSelectedBots={setSelectedBots}/>
        <YourBotArmy selectedBots={selectedBots} /> 
    </div>
  );
}

export default App;
