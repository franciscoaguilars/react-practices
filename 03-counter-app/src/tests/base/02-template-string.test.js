import { getSaludo } from '../../base/02-template-string'

describe("Test on 02-template-string.js", () => {
    test("Should return Hello Frank", () => {

        const nombre = "Frank";

        const greeting = getSaludo(nombre);

        expect(greeting).toBe("Hello " + nombre)

    })

    //getSaludo should return Hello Charles if no argument given
    test("Should return Hello Charles", () => {
        const greeting = getSaludo();

        expect(greeting).toBe("Hello Charles")
    })
})