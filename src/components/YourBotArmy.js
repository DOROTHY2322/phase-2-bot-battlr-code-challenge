import React,{useState} from "react";

const YourBotArmy = (props,setSelectedBots,selectedBots) => {
  const handleEnlistBot = (bot) => {
    setSelectedBots([...selectedBots, bot]);
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
      <div className="selected-bot-container" style={{height:"500px",backgroundColor:"green", overflow:"hidden"}}>
        {props.selectedBots ? (
          props.selectedBots.map((bot) => (
            <div key={bot.id} className="selected-bot mt-1" onClick={() => handleReleaseBot(bot.id)}>
              <img src={bot.avatar_url} className="img-fluid rounded float-start" alt={bot.name} />
              <h2>{bot.name}</h2>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              <p>Catchphrase: {bot.catchphrase}</p>
              <button className="btn btn-danger" onClick={() => handleReleaseBot(bot.id)}>Release</button>
            </div>

          ))
        ) : (
          <div>You have not selected any bots yet.</div>
        )}
      </div>
      
  );
}



  export default YourBotArmy;