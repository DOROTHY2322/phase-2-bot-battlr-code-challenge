import React, { useState } from "react";

const YourBotArmy = (props) => {
  console.log(props) // log the props passed to the component
  const [selectedBots, setSelectedBots] = useState(props.selectedBots);

  console.log(selectedBots) // log the selectedBots state

  const handleReleaseBot = (botId) => {
    setSelectedBots(selectedBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
        <div className="selected-bot-container">
        {selectedBots ? (
          selectedBots.map((bot) => (
            <div key={bot.id} className="selected-bot" onClick={() => handleReleaseBot(bot.id)}>
              <img src={bot.avatar_url} className="img-fluid rounded float-start" alt={bot.name} />
              <h2>{bot.name}</h2>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              <p>Catchphrase: {bot.catchphrase}</p>
          

            </div>
          ))
        ) : 
        (
          <div>You have not selected any bots yet.</div>
        )}
      </div>
    </div>
  )};

export default YourBotArmy;
