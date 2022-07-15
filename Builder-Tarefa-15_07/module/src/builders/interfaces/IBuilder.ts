import Bread from "../../components/Bread";
import Protein from "../../components/Protein";
import Salad from "../../components/Salad";
import SanduicheType from "../../components/SanduicheType";
import Sauces from "../../components/Sauces";
import Sanduiche from "../../products/Sanduiche";


export default interface IBuilder{
    reset() : void;
    getSanduiche() : Sanduiche;
    addSauces(sauce : Sauces);
    setSanduichetype(value : SanduicheType);
    setBread(bread : Bread);
    setProtein(protein : Protein);
    setSalad(salad : Salad);
}