// Functions

const sayHello = (name) => {
    console.log(`Hello ${ name }`)
}

sayHello("Frank");

const person = {
    name: "Camila"
};

const person2 = {...person,
    age: 22,
}

console.log(person);
console.log(person2);

function getActiveUser( name ){
    return {
        uid: "1234",
        username: name
    }
}

const activeUser = getActiveUser("Frank");
console.log(activeUser);

// Transform it to arrow function
// Return an implicit object
// Test it

const getActiveUser2 = ( name ) => ({
    uid: "54321",
    username: name,
})

const activeUser2 = getActiveUser2("Aguilar");
console.log(activeUser2);