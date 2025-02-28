// import { heroes } from './data/heroes';

import heroes, { owners } from "../data/heroes";

// console.log(owners);



// const getHeroeById = (id) => {

//     return heroes.find( ( heroe ) =>  {
//         if ( heroe.id === id ) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

export const getHeroeById = (id) => {
    
    return heroes.find( /*esto es el argumento de la funcion --> */ ( heroe ) =>  heroe.id === id );
}

// console.log( getHeroeById(2) )

export const getHeroeByOwner = (owner) => {
    
    return heroes.filter( /*esto es el argumento de la funcion --> */ ( heroe ) =>  heroe.owner === owner );
}

// console.log( getHeroeByOwner('DC') );

