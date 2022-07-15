export default class Sauces{
    constructor(private _flavor : string){}

    get flavor() : string{
        return this._flavor;
    }

    set flavor(value : string){
        this._flavor = value;
    }
}