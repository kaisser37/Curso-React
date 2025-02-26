// import { heroes } from './data/heroes';

import { heroes } from "./data/heroes"

// const getHeroeById = (id) => {

//     return heroes.find( ( heroe ) =>  {
//         if ( heroe.id === id ) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

const getHeroeById = (id) => {
    
    return heroes.find( /*esto es el argumento de la funcion --> */ ( heroe ) =>  heroe.id === id );
}

console.log( getHeroeById(2) )

const getHeroeByOwner = (owner) => {
    
    return heroes.filter( /*esto es el argumento de la funcion --> */ ( heroe ) =>  heroe.owner === owner );
}

console.log( getHeroeByOwner('DC') );