import IConsole from "./platforms/IConsole";
import Playstation from "./platforms/Playstation";
import Xbox from "./platforms/Xbox";
import AdvancedPlay from "./transmissions/AdvancedPlay";
import Play from "./transmissions/Play";


function startPlay(platform : IConsole){
    console.log("Aguarde...");
    const play = new Play(platform);
    play.playing();
    play.result();
}

function startAdvancedPlay(platform : IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(platform);
    play.playing();
    play.result();
    play.challenge();
}

startPlay(new Xbox());
startAdvancedPlay(new Playstation());