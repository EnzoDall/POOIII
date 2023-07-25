import PC from "./PC";

export default abstract class PCFactory {
    abstract createPC(): PC;
}

