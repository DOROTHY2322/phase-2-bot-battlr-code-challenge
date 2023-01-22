import React, { useState } from "react";

function YourBotArmy() {
    const [selectedBots, setSelectedBots] = useState([]);

   

    // JSX to render the selected bots
    return (
        <div>
            {selectedBots.map((bot) => (
                <div key={bot.id} className="bot">
                    <img src={bot.avatar_url} className="img-fluid rounded float-start" alt={bot.name}/>
                    <h2>{bot.name}</h2>
                    <p>Health: {bot.health}</p>
                    <p>Damage: {bot.damage}</p>
                    <p>Armor: {bot.armor}</p>
                    <p>Class: {bot.bot_class}</p>
                    <p>Catchphrase: {bot.catchphrase}</p>
                
                </div>
            ))}
        </div>
    )
}

export default YourBotArmy;
