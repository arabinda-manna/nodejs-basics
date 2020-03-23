const { assert, expect } = require("chai");
const { isCelebrate } = require('celebrate');
const { first10MultiplesInputValidate, stringCharacterCalcInputValidate, isAmstrongInputValidate } = require("../../library/operationsValidation");

describe("first10MultiplesInputValidate method Unit Testing", () => {
    it("Negetive test num greater than upper limit", async () => {
        try {
            const req = {"params":{ "num": 30 }};
            first10MultiplesInputValidate(req, null, (error) => {
                expect(isCelebrate(error)).to.be.true;
            });
        } catch (e) {
            assert.fail("first10MultiplesInputValidate throws error");
        }
    });
    it("Negetive test num less than lower limit", async () => {
        try {
            const req = {"params":{ "num": -10 }};
            first10MultiplesInputValidate(req, null, (error) => {
                expect(isCelebrate(error)).to.be.true;
            });
        } catch (e) {
            assert.fail("first10MultiplesInputValidate throws error");
        }
    });
    it("Negetive test num is blank", async () => {
        //though router will not accept this input
        try {
            const req = {"params":{ "num": "" }};
            first10MultiplesInputValidate(req, null, (error) => {
                expect(isCelebrate(error)).to.be.true;
            });
        } catch (e) {
            assert.fail("first10MultiplesInputValidate throws error");
        }
    });
    it("Positive test num is given as rule defined", async () => {
        //though router will not accept this input
        try {
            const req = {"params":{ "num": 10 }};
            first10MultiplesInputValidate(req, null, (error) => {               
                expect(error).to.be.null;
            });
        } catch (e) {
            assert.fail("first10MultiplesInputValidate throws error");
        }
    });
});

describe("stringCharacterCalcInputValidate method Unit Testing", () => {
    it("Negetive test string greater than 256 letter", async () => {
        try {
            const req = {"body":{ "string": "Lorem ipsum dolor sit amet, tristique varius mattis vestibulum mus. Senectus id consectetuer maecenas. Lectus fermentum, sagittis gravida ut amet ac eum, magna rutrum enim commodo eget ullamcorper. Morbi ut amet elit pede aliquam montes, nullam orci donecac." }, "method":"post"};
            stringCharacterCalcInputValidate(req, null, async (error) => {             
                expect(isCelebrate(error)).to.be.true;
            });
        } catch (e) {
            assert.fail("stringCharacterCalcInputValidate throws error");
        }
    });
    it("Negetive test string empty", async () => {
        try {
            const req = { "body": { "string": "" }, "method": "post"};
            stringCharacterCalcInputValidate(req, null, (error) => {
                expect(isCelebrate(error)).to.be.true;
            });
        } catch (e) {
            assert.fail("stringCharacterCalcInputValidate throws error");
        }
    });
    it("Positive test valid string given", async () => {
        //though router will not accept this input
        try {
            const req = { "body": { "string": "Arabinda" }, "method": "post"};
            stringCharacterCalcInputValidate(req, null, (error) => {
                expect(error).to.be.null;
            });
        } catch (e) {
            assert.fail("stringCharacterCalcInputValidate throws error");
        }
    });
});

describe("isAmstrongInputValidate method Unit Testing", () => {
    it("Negetive test num greater than upper limit", async () => {
        try {
            const req = {"params":{ "num": 30000000 }};
            isAmstrongInputValidate(req, null, (error) => {
                expect(isCelebrate(error)).to.be.true;
            });
        } catch (e) {
            assert.fail("isAmstrongInputValidate throws error");
        }
    });
    it("Negetive test num less than lower limit", async () => {
        try {
            const req = {"params":{ "num": -10 }};
            isAmstrongInputValidate(req, null, (error) => {
                expect(isCelebrate(error)).to.be.true;
            });
        } catch (e) {
            assert.fail("isAmstrongInputValidate throws error");
        }
    });
    it("Negetive test num is blank", async () => {
        //though router will not accept this input
        try {
            const req = {"params":{ "num": "" }};
            isAmstrongInputValidate(req, null, (error) => {
                expect(isCelebrate(error)).to.be.true;
            });
        } catch (e) {
            assert.fail("isAmstrongInputValidate throws error");
        }
    });
    it("Positive test correct num is given", async () => {
        //though router will not accept this input
        try {
            const req = {"params":{ "num": 100 }};
            isAmstrongInputValidate(req, null, (error) => {
                expect(error).to.be.null;
            });
        } catch (e) {
            assert.fail("isAmstrongInputValidate throws error");
        }
    });
});