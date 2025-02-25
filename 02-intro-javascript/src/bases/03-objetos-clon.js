const persona = {
    nombre: "santi",
    apellido: "vergara",
    edad: 22,
    direccion: {
        ciudad: "Cali",
        postal: 661020,
        temperatura: 25,
    }
}

// console.log(persona);

const persona2 = {...persona};
persona2.apellido = "franco";

console.log(persona)
console.log(persona2)