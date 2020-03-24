const { assert, expect } = require("chai");
const { first10Multiples, stringCharacterCalc, isAmstrong } = require("../../library/operations");

describe("first10Multiples method Unit Testing", () => {
    it("Positive Tests", () => {
        assert.equal(first10Multiples(1), "1 1 1 1 1 1 1 1 1 1"); //1's power series upto 10 power
        assert.equal(first10Multiples(2), "2 4 8 16 32 64 128 256 512 1024");
        assert.equal(first10Multiples(10), "10 100 1000 10000 100000 1000000 10000000 100000000 1000000000 10000000000");
    });
});

describe("stringCharacterCalc method Unit Testing", () => {
    it("Positive Tests", () => {
        assert.equal(stringCharacterCalc("Arabinda Manna"), '{"a":5,"r":1,"b":1,"i":1,"n":3,"d":1," ":1,"m":1}');
        assert.equal(stringCharacterCalc("NodeJs"), '{"n":1,"o":1,"d":1,"e":1,"j":1,"s":1}');
    });
});

describe("isAmstrong method Unit Testing", () => {
    it("Positive test amstrong num is given", () => {
        //though router will not accept this input
        expect(isAmstrong(153)).to.be.equal("153 is a Amstrong number");
    });
    it("Negetive test non-amstrong num is given", () => {
        //though router will not accept this input
        expect(isAmstrong(1530)).to.be.equal("1530 is not a Amstrong number");
    });
});