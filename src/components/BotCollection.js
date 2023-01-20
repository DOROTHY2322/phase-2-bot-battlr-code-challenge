import React, {useEffect, useState} from "react";



const BotCollection = () => {

    const [bots, setBots] = useState([]);

    useEffect(() => {
        fetch("https://json-server-vercel-34ln.vercel.app/api/bots")
            .then(response => response.json())
            .then(bots => setBots(bots))
      }, []); 
    console.log(bots)
    return(
        <div>

        </div>
    )

}
export default BotCollection;