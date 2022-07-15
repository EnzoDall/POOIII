import IBuilder from "../builders/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";

export default class Director{
    constructor (private builder : IBuilder){}

    constructHotDog(){
        this.builder.setSanduichetype(SanduicheType.HOTDOG);
        this.builder.setSalad(Salad.CEBOLA);
        this.builder.setBread(Bread.PAODEHOTDOG);
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.addSauces(new Sauces("Ketchup"));
        this.builder.addSauces(new Sauces("Mostarda"));
    }

    constructHamburger(){
        this.builder.setSanduichetype(SanduicheType.XSALAD);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.setBread(Bread.PAODEHAMBURGUER);
        this.builder.setProtein(Protein.MIGNON);
        this.builder.addSauces(new Sauces("Ketchup"));
        this.builder.addSauces(new Sauces("Maionese"));
    }
    
}