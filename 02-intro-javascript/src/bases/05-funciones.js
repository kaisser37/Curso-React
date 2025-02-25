
const saludar = ( nombre ) => `Hola, ${ nombre }`;
const saludar2 = ( ) => 'Hola mundo';

console.log( saludar('santiago') );
console.log( saludar2() );



const getUser = () => ({

    uid:'ABC123',
    username: 'Sato73'

});


const user = getUser();
console.log(user);

//TAREA

const getUsuarioActivo = ( nombre ) => ({

        uid: 'ABC567',
        username: nombre

});

const usuarioActivo = getUsuarioActivo ('Fernando');
console.log(usuarioActivo);