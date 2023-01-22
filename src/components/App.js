import React from 'react';
import './App.css';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

function App() {
  
  return (
    <div>
<h2 className='navbar navbar-expand-lg bg-body-secondary'>ROBOT ARMY</h2>
<BotCollection/>
<YourBotArmy/>
    </div>
  );
}

export default App;
