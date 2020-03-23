const { assert, expect } = require("chai");
const sinon = require("sinon");

const { processGenerateJWT } = require("../../controllers/jwt");
const jwtLib = require("../../library/jwt");

describe("processGenerateJWT Controller Function Unit Testing", () => {
    it("next should be called", async (done) => {
        sinon.stub(jwtLib, "generateJWT").throws(new Error("generateJWT throws wanted error"));
        const sinonNext = sinon.spy();
        processGenerateJWT({}, {}, sinonNext);
        expect(sinonNext.calledOnce).to.be.true;
        jwtLib.generateJWT.restore();
        done();
    });

    it("res.json should be called", async (done) => {
        sinon.stub(jwtLib, "generateJWT").returns("abcd");
        const jsonFake = sinon.spy();
        const resSpy = {
            "json": jsonFake
        };
        processGenerateJWT({}, resSpy, ()=>{});
        expect(jsonFake.calledOnce).to.be.true;
        jwtLib.generateJWT.restore();
        done();
    });
});