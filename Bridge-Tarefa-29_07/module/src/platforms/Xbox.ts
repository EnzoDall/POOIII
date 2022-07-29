import IConsole from "./IConsole";


export default class Xbox implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Playstation: plataforma iniciada!!");
    }
    configureGame(): void {
        this.authToken();
        console.log("Playstation: configurando inicialização...");
    }
    authToken(): void {
        console.log("Playstation: autorizando a plataforma...");
    }

}