import React,{useState} from 'react';
import './App.css';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';


function App() {
  const [selectedBots, setSelectedBots] = useState([]);

const handleReleaseBot = (bot) => {
  setSelectedBots(selectedBots.filter(b => bot.id !== bot.id))
}

  return (
    <div>
        <h2 className="navbar bg-dark navbar-brand text-react text-light nav-link active text-light">ROBOT ARMY</h2>
        <YourBotArmy selectedBots={selectedBots} handleReleaseBot={handleReleaseBot}/>
        <BotCollection selectedBots={selectedBots} setSelectedBots={setSelectedBots}/>
    </div>
  );
}


export default App;
