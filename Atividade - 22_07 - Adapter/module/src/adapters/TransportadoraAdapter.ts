import ICorreio from "../paypal/ICorreio";
import Transportadora from "../payoneer/Transportadora";

export default class TransportadoraAdapter implements ICorreio{

    constructor(private _transportadora : Transportadora){
        console.log("Adaptando Correio em Transportadora...");
    }
    send(): void {
        return this._transportadora.send();
    }
    receive(): void {
        return this._transportadora.receive();
    }

}