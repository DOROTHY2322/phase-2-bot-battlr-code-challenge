import React,{useState} from "react";

const YourBotArmy = (props) => {
  const handleEnlistBot = (bot) => {
    let updatedBots = [...props.bots];
    let botIndex = updatedBots.findIndex(b => b.id === bot.id);
    updatedBots[botIndex].isSelected = true;
    props.setSelectedBots([...props.selectedBots, bot]);
  };

  const handleReleaseBot = (botId) => {
    let updatedBots = [...props.bots];
    let botIndex = updatedBots.findIndex(b => b.id === botId);
    updatedBots[botIndex].isSelected = false;
    props.setSelectedBots(props.selectedBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <div className="selected-bot-container">
        {props.selectedBots ? (
          props.selectedBots.map((bot) => (
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
        ) : (
          <div>You have not selected any bots yet.</div>
        )}
      </div>
    </div>
  );
}



  export default YourBotArmy;