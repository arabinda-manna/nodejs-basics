const chai = require("chai");
const { assert, expect } = chai;
const chaiJWT = require('chai-jwt');

const { generateJWT, validateJWT } = require("../../controllers/jwt");
const sinon = require("sinon");
const jwt = require('jsonwebtoken');

describe("Generate JWT Token Unit Testing", () => {
    chai.use(chaiJWT);
    it("Positive Test of JWT Token Generate", () => {
        const token = generateJWT({ "id": 1 });
        expect(token).to.be.a.jwt;
    });
});

describe("Validate JWT Token Unit Testing", () => {
    it("Positive Test of JWT Token Validation", () => {
        const token = generateJWT({ "id": 1 });
        const result = validateJWT(token);
        expect(result).to.true;
    });
    it("Negetive Test of JWT Token Validation with JsonWebTokenError", () => {
        const token = generateJWT({ "id": 1 });
        const result = validateJWT(token + 1); //adding gurbage to token to falsify test
        assert.isNotTrue(result);
    });
    it("Negetive Test of JWT Token Validation with unknown error", () => {
        const error = new Error("verify throws unknown type error");
        sinon.stub(jwt, "verify").throws(error);
        
        const token = generateJWT({ "id": 1 });
        const result = validateJWT(token + 1); //adding gurbage to token to falsify test
        assert.isNotTrue(result);
        jwt.verify.restore();
    });
});