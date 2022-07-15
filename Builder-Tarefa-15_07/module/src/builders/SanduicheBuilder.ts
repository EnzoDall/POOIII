import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./interfaces/IBuilder";


export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche();

    reset(): void {
        this.sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        return this.sanduiche;
    }
    addSauces(sauce: Sauces) {
        this.sanduiche.addSauces(sauce);
    }
    setSanduichetype(value: SanduicheType) {
        this.sanduiche.sanduicheType = value;
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread;
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad = salad;
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein;
    }

}