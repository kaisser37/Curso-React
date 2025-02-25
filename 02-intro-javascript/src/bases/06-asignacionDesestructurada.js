
//desestructuracion

const persona ={

    nombre: 'tony',
    edad: 35,
    clave: 'Ironman'

};

// const { edad, nombre, clave } = persona;

// console.log( edad );
// console.log( nombre );
// console.log( clave );

const useContext = ({ clave, nombre, edad, rango = 'capitan' }) => {

    // console.log( nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,

        lnglat: {
            lng: 389283,
            lat: -12203
        }
    }
}

const { nombreClave, anios, lnglat: { lng, lat } }  = useContext( persona );

console.log( nombreClave, anios );
console.log( lng, lat );