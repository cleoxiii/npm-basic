import {transform} from "../src/romanizer";

describe('romanizer', () => {
    it('should transform 10 to X', () => {
        const transformed = transform(10);

        expect(transformed).toEqual("X");
    });
});