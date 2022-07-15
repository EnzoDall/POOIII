import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";

export default class Sanduiche{
    private _sanduicheType : SanduicheType;
    private _protein : Protein;
    private _sauce : Sauces[] = [];
    private _salad : Salad;
    private _bread : Bread;

    get sanduicheType() : SanduicheType{
        return this._sanduicheType;
    }

    set sanduicheType(value : SanduicheType){
        this._sanduicheType = value;
    }

    get protein() : Protein{
        return this._protein;
    }

    set protein(value : Protein){
        this._protein = value;
    }

    addSauces(sauce : Sauces){
        this._sauce.push(sauce);
    }

    get sauces() : Sauces[]{
        return this._sauce;
    }

    get salad() : Salad{
        return this._salad;
    }

    set salad(value : Salad){
        this._salad = value;
    }

    get bread() : Bread{
        return this._bread;
    }

    set bread(value : Bread){
        this._bread = value;
    }
}