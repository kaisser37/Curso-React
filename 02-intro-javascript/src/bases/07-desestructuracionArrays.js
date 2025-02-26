
// desestructuracion de un arreglo

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, ,p3] = personajes;
console.log( p3 );

// desestructuracion de un arreglo dentro de una funcion

const retornaArreglo = () =>{
    return [ 'ABC', 123 ];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros)


// tarea

const useState = ( valor ) => {

    return [ valor, ()=>{ console.log('Hola Mundo') } ];

}   

const [nombre, setNombre ] = useState( 'goku' );

console.log(nombre);
setNombre();