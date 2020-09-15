import returnHeroById from './bases/08-import';

const promise = new Promise( (resolve, reject) => {

    setTimeout( () => {
        const heroe = returnHeroById(2);
        console.log(heroe);
        resolve(heroe);
        reject( 'No se pudo encontrar el heroe');
    }, 2000)
});

promise.then( (heroe) => {
    console.log(heroe.name)
})
.catch( err => console.log(err))