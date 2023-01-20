import React, {useEffect, useState} from "react";



const BotCollection = () => {

    const [bots, setBots] = useState([]);
    const [selectedBots, setSelectedBots] = useState([]);

const handleBotClick = (bot) => {
    if(!selectedBots.find(b => b.id === bot.id)){
        setSelectedBots([...selectedBots, bot])
    }
}


    useEffect(() => {
        fetch("https://json-server-vercel-34ln.vercel.app/api/bots")
            .then(response => response.json())
            .then(bots => setBots(bots))
      }, []); 
    console.log(bots)
    return(
        <div>
            <h1>Bot Collection</h1>
            {bots.map((bot) => (
                <div key={bot.id} className="bot" onClick={() => handleBotClick(bot)}>
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
export default BotCollection;