import React,{useState} from 'react';
import './App.css';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';


function App() {
  const [selectedBots, setSelectedBots] = useState([]);

  return (
    <div>
        <h2 className='navbar navbar-expand-lg bg-body-secondary'>ROBOT ARMY</h2>
        <BotCollection selectedBots={selectedBots} setSelectedBots={setSelectedBots}/>
        <YourBotArmy selectedBots={selectedBots} /> 
    </div>
  );
}

export default App;
