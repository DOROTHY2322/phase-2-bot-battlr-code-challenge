import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";

const BotCollection = () => {
    
    const [bots, setBots] = useState([]);
    const [selectedBots, setSelectedBots] = useState([]);

    const handleAddBot = (bot) => {
        console.log(bot);
        if(!selectedBots.find(b => b.id === bot.id)){
            setSelectedBots([...selectedBots, bot]);
        }
    }
    
    const handleDelete = (botId) => {
        setSelectedBots(selectedBots.filter(b => b.id !== botId));
        fetch(`https://json-server-vercel-34ln.vercel.app/api/bots/${botId}`, {
            method: 'DELETE'
        })

        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch("https://json-server-vercel-34ln.vercel.app/api/bots")
            .then(response => response.json())
            .then(bots => setBots(bots))
    }, []); 

    return (
        <div className="container">
          <h1 className="text-center">Bot Collection</h1>
          <div className="row">
          {bots.map((bot) => (
  <div key={bot.id} className={`col-3 p-1 bot-card ${bot.bot_class.toLowerCase()}`} onClick={() => handleAddBot(bot)}>
    <div className="card text-center overflow-hidden">
        <img src={bot.avatar_url} className="img-fluid rounded float-start card-img-top" alt={bot.name}/>
        <div className="card-body">
        <h2>{bot.name}</h2>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        <button className="btn btn-danger" onClick={() => handleDelete(bot.id)}>x</button>
        </div>
    </div>
  </div>
))}

          </div>
          <YourBotArmy selectedBots={selectedBots} />
        </div>
      )
            }
export default BotCollection;
