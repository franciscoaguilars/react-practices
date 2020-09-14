const array = [1,2,3,4,5];

// let arreglo2 = array;
// arreglo2.push(6) // This will also mutate ''array'' variable.


let arreglo3 = [ ...array, 6] // Correct way.-

console.log(array);
console.log(arreglo3);

let arreglo4 = array.filter((n) => {
    return n > 3
});

console.log(arreglo4)