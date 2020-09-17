
const nombre   = 'Francisco';
const apellido = 'Aguilar';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo( nombre = "Charles") {
    return 'Hello ' + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );