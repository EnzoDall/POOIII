import NotebookFactory from "./factory/NotebookFactory";
import DesktopFactory from "./factory/DesktopFactory";

const notebooks = new NotebookFactory("I5", "Integrada", 8, "R$ 2000,00", "1920x1080");
const notebook = notebooks.createPC();
const clonednotebook = notebook.clone();

notebook.ligar();
console.log("Processador do notebook original:", notebook.getProcessador());
console.log("GPU do notebook original:", notebook.getGpu());
console.log("Memoria do notebook original:", notebook.getMemoria());
console.log("Preco do notebook original:", notebook.getPreco());
console.log()
clonednotebook.ligar();
console.log("Processador do notebook clonado:", clonednotebook.getProcessador());
console.log("GPU do notebook clonado:", clonednotebook.getGpu());
console.log("Memoria do notebook clonado:", clonednotebook.getMemoria());
console.log("Preco do notebook clonado:", clonednotebook.getPreco());

const desktopFactory = new DesktopFactory("Ryzen 5", "RTX 3080", 16, "R$ 5000,00", "Galax");
const desktop = desktopFactory.createPC();
const cloneddesktop = desktop.clone();
console.log()
desktop.ligar();
console.log("Processador do PC Desktop original:", desktop.getProcessador());
console.log("GPU do PC Desktop original:", desktop.getGpu());
console.log("Memoria do PC Desktop original:", desktop.getMemoria());
console.log("Preco do PC Desktop original:", desktop.getPreco());
console.log()
cloneddesktop.ligar();
console.log("Processador do PC Desktop clonado:", cloneddesktop.getProcessador());
console.log("GPU do PC Desktop clonado:", cloneddesktop.getGpu());
console.log("Memoria do PC Desktop clonado:", cloneddesktop.getMemoria());
console.log("Preco do PC Desktop clonado:", cloneddesktop.getPreco());