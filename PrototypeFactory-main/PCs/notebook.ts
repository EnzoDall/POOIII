import PC from "../abstractClasses/PC";

export default class notebook extends PC {
    private resolucao: string;

    constructor(processador: string, gpu: string, memoria: number, preco: string, resolucao: string) {
        super(processador, gpu, memoria, preco);
        this.resolucao = resolucao;
    }

    clone(): PC {
        return new notebook(this.processador, this.gpu, this.memoria, this.preco, this.resolucao);
    }

    ligar(): void {
        console.log(`Ligando Notebook com ${this.memoria} de memoria RAM, processador ${this.processador}, placa de video ${this.gpu} e resolucao ${this.resolucao} custando ${this.preco}`);
    }
}