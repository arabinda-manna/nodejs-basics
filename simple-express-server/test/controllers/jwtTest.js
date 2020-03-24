const { assert, expect } = require("chai");
const sinon = require("sinon");

const { processGenerateJWT, processValidateJWT } = require("../../controllers/jwt");
const jwtLib = require("../../library/jwt");
const headerUtils = require('../../library/headerUtils');

describe("processGenerateJWT Controller Function Unit Testing", () => {
    before(() => {
        sinon.stub(jwtLib, "generateJWT").throws(new Error("generateJWT throws wanted error"));
    });
    after(() => {
        jwtLib.generateJWT.restore();
    });
    it("next should be called", () => {      
        const sinonNext = sinon.spy();
        processGenerateJWT({}, {}, sinonNext);
        expect(sinonNext.calledOnce).to.be.true;    
    });
});

describe("processGenerateJWT Controller Function Unit Testing", () => {
    before(() => {
        sinon.stub(jwtLib, "generateJWT").returns("abcd");
    });
    after(() => {
        jwtLib.generateJWT.restore();
    });

    it("res.json should be called", () => {
        const jsonFake = sinon.spy();
        const resSpy = {
            "json": jsonFake
        };
        processGenerateJWT({}, resSpy, ()=>{});
        expect(jsonFake.calledOnce).to.be.true;
    });
});

describe("processValidateJWT Controller Function Unit Testing", () => {
    before(() => {
        sinon.stub(headerUtils, "getBearerToken").throws(new Error("getBearerToken throws wanted error"));
    });
    after(() => {
        headerUtils.getBearerToken.restore();
    });
    it("next should be called", () => {       
        const sinonNext = sinon.spy();
        processValidateJWT({}, {}, sinonNext);
        expect(sinonNext.calledOnce).to.be.true; 
    });
});

describe("processValidateJWT Controller Function Unit Testing", () => {
    before(()=>{
        sinon.stub(headerUtils, "getBearerToken").returns("");
    });
    after(() => {
        headerUtils.getBearerToken.restore();
    });

    it("res.send should be called", () => {
        const res = {
            status() { },
            send() { }
        };
        const statusSpy = sinon.spy(res, 'status');
        const sendSpy = sinon.spy(res, 'send');

        processValidateJWT({}, res, () => { });
        expect(statusSpy.calledOnceWith(401)).to.be.true;
    });
});