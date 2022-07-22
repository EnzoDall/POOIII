import { Console } from "console";
import ITransportadora from "./ITransportadora";


export default class Transportadora implements ITransportadora{

    send(): void {
        console.log("Enviando encomenda por transportadora.");
    }
    receive(): void {
        console.log("Recebendo encomenda por transportadora.");
    }

}