import React from "react";


const YourBotArmy = ({selectedBots}) => {
    return (
        <div>
            <h1>Your Bot Army</h1>
            <div className="selected-bot-container">
                {selectedBots ? (
                    selectedBots.map((bot) => (
                        <div key={bot.id} className="selected-bot">
                            <img src={bot.avatar_url} className="img-fluid rounded float-start" alt={bot.name}/>
                            <h2>{bot.name}</h2>
                            <p>Health: {bot.health}</p>
                            <p>Damage: {bot.damage}</p>
                            <p>Armor: {bot.armor}</p>
                            <p>Class: {bot.bot_class}</p>
                            <p>Catchphrase: {bot.catchphrase}</p>
                        </div>
                    ))
                ) : (
                    <div>You have not selected any bots yet.</div>
                )}
            </div>
        </div>
    );
};


  

export default YourBotArmy;
