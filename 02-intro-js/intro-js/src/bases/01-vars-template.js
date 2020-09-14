// Scope 
let valor = 5;
console.log( valor );

if ( true ){
    let valor = 10;

    console.log(valor);
}

// Template String

const nombreCompleto = "Francisco Aguilar";
const saludo = `Hello, ${nombreCompleto}`

console.log(saludo); 

const saludar = (name) => {
    return `Hello ${name}`;
}

console.log(`${saludar("Frank")}`)