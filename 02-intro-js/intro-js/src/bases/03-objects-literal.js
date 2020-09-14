const persona = {
    name: "Frank",
    lastName: "Aguilar",
}

// const persona2 = persona; // Will asign the REFERENCE of persona.

// console.log(persona2)

// persona2.name = "Carlos" // This will also mutate persona object;


// You can use spread operator instead of assigning the object.

const persona3 = { ...persona }


persona3.name = "Carlos" // This will not mutate original object

console.log(persona);
console.log(persona3)