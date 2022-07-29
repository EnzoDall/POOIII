import IConsole from "../platforms/IConsole";
import IPlay from "./IPlay";

export default class Play implements IPlay{

    constructor(private platform : IConsole){
        
    }
    playing(): void {
        console.log("Iniciando o jogo...");
    }
    result(): void {
        console.log("Jogando!!");
    }

}