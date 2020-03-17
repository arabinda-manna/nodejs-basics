const { assert, expect } = require("chai");
const { first10MultiplesInputValidate, first10Multiples, stringCharacterCalcInputValidate, stringCharacterCalc, isAmstrongInputValidate, isAmstrong } = require("../../controllers/operations");

describe("first10MultiplesInputValidate method Unit Testing", () => {
    it("Negetive test num greater than upper limit", async () => {
        try{
            const status = await first10MultiplesInputValidate({"num":30});
            expect(status.status).to.be.false;
        }catch(e){
            assert.fail("first10MultiplesInputValidate throws error");
        }
    });
    it("Negetive test num less than lower limit", async () => {
        try{
            const status = await first10MultiplesInputValidate({"num":-10});
            expect(status.status).to.be.false;
        }catch(e){
            assert.fail("first10MultiplesInputValidate throws error");
        }
    });
    it("Negetive test num is blank", async () => {
        //though router will not accept this input
        try{
            const status = await first10MultiplesInputValidate({"num":""});
            expect(status.status).to.be.false;
        }catch(e){
            assert.fail("first10MultiplesInputValidate throws error");
        }
    });
    it("Positive test num is given as rule defined", async () => {
        //though router will not accept this input
        try{
            const status = await first10MultiplesInputValidate({"num":10});
            expect(status.status).to.be.true;
        }catch(e){
            assert.fail("first10MultiplesInputValidate throws error");
        }
    });
});

describe("first10Multiples method Unit Testing", () => {
    it("Positive Tests", () => {
        assert.equal(first10Multiples(1), "1 1 1 1 1 1 1 1 1 1"); //1's power series upto 10 power
        assert.equal(first10Multiples(2), "2 4 8 16 32 64 128 256 512 1024");
        assert.equal(first10Multiples(10), "10 100 1000 10000 100000 1000000 10000000 100000000 1000000000 10000000000");
    });
});

describe("stringCharacterCalcInputValidate method Unit Testing", () => {
    it("Negetive test string greater than 256 letter", async () => {
        try {
            const status = await stringCharacterCalcInputValidate({ "string": "Lorem ipsum dolor sit amet, tristique varius mattis vestibulum mus. Senectus id consectetuer maecenas. Lectus fermentum, sagittis gravida ut amet ac eum, magna rutrum enim commodo eget ullamcorper. Morbi ut amet elit pede aliquam montes, nullam orci donecac." });
            expect(status.status).to.be.false;
        } catch (e) {
            assert.fail("stringCharacterCalcInputValidate throws error");
        }
    });
    it("Negetive test string empty", async () => {
        try {
            const status = await stringCharacterCalcInputValidate({ "string": "" });
            expect(status.status).to.be.false;
        } catch (e) {
            assert.fail("stringCharacterCalcInputValidate throws error");
        }
    });

    it("Positive test valid string given", async () => {
        //though router will not accept this input
        try {
            const status = await stringCharacterCalcInputValidate({ "string": "Arabinda" });
            expect(status.status).to.be.true;
        } catch (e) {
            assert.fail("stringCharacterCalcInputValidate throws error");
        }
    });
});

describe("stringCharacterCalc method Unit Testing", () => {
    it("Positive Tests", () => {
        assert.equal(stringCharacterCalc("Arabinda Manna"), '{"a":5,"r":1,"b":1,"i":1,"n":3,"d":1," ":1,"m":1}');
        assert.equal(stringCharacterCalc("NodeJs"), '{"n":1,"o":1,"d":1,"e":1,"j":1,"s":1}');
    });
});

describe("isAmstrongInputValidate method Unit Testing", () => {
    it("Negetive test num greater than upper limit", async () => {
        try {
            const status = await isAmstrongInputValidate({ "num": 30000000 });
            expect(status.status).to.be.false;
        } catch (e) {
            assert.fail("isAmstrongInputValidate throws error");
        }
    });
    it("Negetive test num less than lower limit", async () => {
        try {
            const status = await isAmstrongInputValidate({ "num": -10 });
            expect(status.status).to.be.false;
        } catch (e) {
            assert.fail("isAmstrongInputValidate throws error");
        }
    });
    it("Negetive test num is blank", async () => {
        //though router will not accept this input
        try {
            const status = await isAmstrongInputValidate({ "num": "" });
            expect(status.status).to.be.false;
        } catch (e) {
            assert.fail("isAmstrongInputValidate throws error");
        }
    });
    it("Positive test correct num is given", async () => {
        //though router will not accept this input
        try {
            const status = await isAmstrongInputValidate({ "num": 100 });
            expect(status.status).to.be.true;
        } catch (e) {
            assert.fail("isAmstrongInputValidate throws error");
        }
    });
});

describe("isAmstrong method Unit Testing", () => {
    it("Positive test amstrong num is given", async () => {
        //though router will not accept this input
        expect(isAmstrong(153)).to.be.equal("153 is a Amstrong number");
    });
    it("Negetive test non-amstrong num is given", async () => {
        //though router will not accept this input
        expect(isAmstrong(1530)).to.be.equal("1530 is not a Amstrong number");
    });
});