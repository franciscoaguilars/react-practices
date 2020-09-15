// Array desrtructuration

const dragonBall = ["Goku", "Vegeta", "Trunks"];

const [ first ] = dragonBall; // Will gather the first from dragonBall array

console.log(first); 

// If you need another position you can use a ,

const [ , second ] = dragonBall;
console.log(second); 

const useState = ( value ) => {
    return [ value, () => { console.log("Hello") }]
}

const [ name, setName ] = useState("Goku");

console.log(name, setName)