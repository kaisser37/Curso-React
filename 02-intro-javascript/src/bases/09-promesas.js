import { getHeroeById } from "./bases/08-importaciones";



// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         resolve( heroe );
//     }, 2000);
    
// });

// promesa.then( ( heroe ) => {
//     console.log('Heroe', heroe);
// } )
// .catch( err => console.warn( err ) );


const getHeroeByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
    
            const p1 = getHeroeById(id);
            if (p1 ){
                resolve( p1 );
            }else{
                reject( 'No se encontro el heroe' );
            }
        }, 2000);
        
    });
}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );