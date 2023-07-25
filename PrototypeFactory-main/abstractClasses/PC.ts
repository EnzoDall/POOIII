export default abstract class PC {
    protected processador: string;
    protected gpu: string;
    protected memoria: number;
    protected preco: string;

    constructor(processador: string, gpu: string, memoria: number, preco: string) {
        this.processador = processador;
        this.gpu = gpu;
        this.memoria = memoria;
        this.preco = preco;
    }

    abstract clone(): PC;

    getProcessador(): string {
        return this.processador;
    }

    getGpu(): string {
        return this.gpu;
    }

    getMemoria(): number {
        return this.memoria;
    }

    getPreco(): string {
        return this.preco;
    }
    abstract ligar(): void;
}


