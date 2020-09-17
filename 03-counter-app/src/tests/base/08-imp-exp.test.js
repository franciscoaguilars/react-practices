import '@testing-library/jest-dom';
import { getHeroeById } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe("Testing on 08-imp-exp", () => {

    test('should return a heroe by id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id == id)


        expect(heroe).toEqual(heroeData)
    })

})