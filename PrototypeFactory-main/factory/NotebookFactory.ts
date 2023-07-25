import PC from "../abstractClasses/PC";
import PCFactory from "../abstractClasses/PCFactory";
import notebook from "../PCs/notebook";

export default class NotebookFactory extends PCFactory {
    private processador: string;
    private gpu: string;
    private memoria: number;
    private preco: string;
    private resolucao: string;

    constructor(processador: string, gpu: string, memoria: number, preco: string, resolucao: string) {
        super();
        this.processador = processador;
        this.gpu = gpu;
        this.memoria = memoria;
        this.preco = preco;
        this.resolucao = resolucao;
    }

    createPC(): PC {
        return new notebook(this.processador, this.gpu, this.memoria, this.preco, this.resolucao);
    }
}
