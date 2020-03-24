const chai = require("chai");
const {assert, expect} = chai;
const headerUtils = require("../../library/headerUtils");
const sinon = require("sinon");

describe("getBearerToken Method Unit Test", () => {
    before(() => {
        const getAuthorizationHeaderStub = sinon.stub(headerUtils, "getAuthorizationHeader");
        getAuthorizationHeaderStub.withArgs('bearer').returns('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBcmFiaW5kYSIsImxhc3ROYW1lIjoiTWFubmEiLCJhZ2UiOjI1LCJpYXQiOjE1ODM5Mjk2MTIsImV4cCI6MTU4MzkyOTczMiwiYXVkIjoibG9jYWxob3N0IiwiaXNzIjoibG9jYWxob3N0IiwianRpIjoiYWhpQWQifQ.AU8hKXxJbV5qZs_IQwzzDP6jiMVSPlpS2fuVU66IQ38');
        getAuthorizationHeaderStub.withArgs('plain').returns('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBcmFiaW5kYSIsImxhc3ROYW1lIjoiTWFubmEiLCJhZ2UiOjI1LCJpYXQiOjE1ODM5Mjk2MTIsImV4cCI6MTU4MzkyOTczMiwiYXVkIjoibG9jYWxob3N0IiwiaXNzIjoibG9jYWxob3N0IiwianRpIjoiYWhpQWQifQ.AU8hKXxJbV5qZs_IQwzzDP6jiMVSPlpS2fuVU66IQ38');
    });

    it("should not return null", () => {
        let res = headerUtils.getBearerToken("bearer");
        expect(res).to.not.be.null;
    });
    it("should return null", () => {
        let res = headerUtils.getBearerToken("plain");
        expect(res).to.be.null;
    });

    after(() => {
        headerUtils.getAuthorizationHeader.restore();
    })
});