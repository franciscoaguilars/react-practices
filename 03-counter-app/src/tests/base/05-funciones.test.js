import '@testing-library/jest-dom'
import { getUser } from '../../base/05-funciones';
import { getUsuarioActivo} from '../../base/05-funciones';

describe("Testing on 05-funciones.js", () => {
    test("getUser should return an object", () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect(user).toEqual(userTest)
    })

    test("getUsuarioActivo debe de retornar un objeto", () => {

        const userTest1 = {
            uid: 'ABC123',
            username: "Frank"
        }

        const userTest2 = getUsuarioActivo("Frank");

        expect(userTest1).toEqual(userTest2)
    })
})