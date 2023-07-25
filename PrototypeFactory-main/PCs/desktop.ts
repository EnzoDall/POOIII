import PC from "../abstractClasses/PC";

export default class desktop extends PC {
    private gabinete: string;

    constructor(processador: string, gpu: string, memoria: number, preco: string, gabinete: string) {
        super(processador, gpu, memoria, preco);
        this.gabinete = gabinete;
    }

    clone(): PC {
        return new desktop(this.processador, this.gpu, this.memoria, this.preco, this.gabinete);
    }

    ligar(): void {
        console.log(`Ligando PC Desktop com ${this.memoria} de memoria RAM, processador ${this.processador}, placa de video ${this.gpu} e gabinete ${this.gabinete} custando ${this.preco}`);
    }
}
