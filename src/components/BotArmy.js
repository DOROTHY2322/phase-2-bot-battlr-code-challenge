import React from "react";
import BotCollection from "./BotCollection";

function BotArmy(){
    const YourBotArmy = () => {
        const [selectedBots, setSelectedBots] = useState([]);
        return (
            <div>
                <h1>Your Bot Army</h1>
                {selectedBots.map((bot) => (
                    <div key={bot.id}>
                        <h2>{bot.name}</h2>
                        <p>Health: {bot.health}</p>
                        <p>Damage: {bot.damage}</p>
                        <p>Armor: {bot.armor}</p>
                        <p>Class: {bot.bot_class}</p>
                        <p>Catchphrase: {bot.catchphrase}</p>
                        <img src={bot.avatar_url} alt={bot.name}/>
                    </div>
                ))}
            </div>
        )
    }
    
}

export default BotArmy;