import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe("Test in destructuration", () => {
    test("Testing with arrays", () => {

        const [letters, numbers] = retornaArreglo();

        expect(typeof letters).toBe('string')
    })
})