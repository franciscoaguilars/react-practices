// Imports
import  heroes  from '../data/heroes';

const returnHeroById = ( id ) => {
    return heroes.find(heroe => heroe.id == id)
}

// console.log(returnHeroById(1));

const getHeroesByOwner = ( owner ) => {
    return heroes.filter( heroe => heroe.owner.toLowerCase() === owner.toLowerCase())
}

// console.log(getHeroesByOwner("Dc"))

export default returnHeroById;
