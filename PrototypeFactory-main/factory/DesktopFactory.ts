import PC from "../abstractClasses/PC";
import PCFactory from "../abstractClasses/PCFactory";
import desktop from "../PCs/desktop";

export default class DesktopFactory extends PCFactory {
    private processador: string;
    private gpu: string;
    private memoria: number;
    private preco: string;
    private gabinete: string;

    constructor(processador: string, gpu: string, memoria: number, preco: string, gabinete: string) {
        super();
        this.processador = processador;
        this.gpu = gpu;
        this.memoria = memoria;
        this.preco = preco;
        this.gabinete = gabinete;
    }

    createPC(): PC {
        return new desktop(this.processador, this.gpu, this.memoria, this.preco, this.gabinete);
    }
}