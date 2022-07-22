import { Console } from "console";
import ICorreio from "./ICorreio";


export default class Correio implements ICorreio{

    send(): void {
        console.log("Enviando encomenda por correio.");
    }
    receive(): void {
        console.log("Recebendo encomenda por correio.");
    }

}