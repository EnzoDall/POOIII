
import SanduicheBuilder from "./builders/SanduicheBuilder";

import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";


const builder : SanduicheBuilder = new SanduicheBuilder();
const diretor : Director = new Director(builder);

diretor.constructHotDog();
let hotdog : Sanduiche = builder.getSanduiche();
console.log("Fazendo sanduíche: " + hotdog.sanduicheType);
console.log("Salada: " + hotdog.salad);
console.log("Pão: " + hotdog.bread);
for(let sauce of hotdog.sauces){
    console.log("Molho:" + sauce.flavor);
}


diretor.constructHamburger();
let xsalad : Sanduiche = builder.getSanduiche();
console.log("Fazendo sanduíche: " + xsalad.sanduicheType);
console.log("Salada: " + xsalad.salad);
console.log("Pão: " + xsalad.bread);
for(let sauce of xsalad.sauces){
    console.log("Molho:" + sauce.flavor);
}
