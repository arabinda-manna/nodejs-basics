const chai = require("chai");
const {assert, expect} = chai;

const headerUtils = require("../../library/headerUtils");
class Req {
    constructor(authorization){
        this["Authorization"] = authorization;
    }

    get(name){
        return this[name];
    }
}

describe("getBearerToken Method Unit Test", () => {
    it("should not return null", (done) => {
        const req = new Req('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBcmFiaW5kYSIsImxhc3ROYW1lIjoiTWFubmEiLCJhZ2UiOjI1LCJpYXQiOjE1ODM5Mjk2MTIsImV4cCI6MTU4MzkyOTczMiwiYXVkIjoibG9jYWxob3N0IiwiaXNzIjoibG9jYWxob3N0IiwianRpIjoiYWhpQWQifQ.AU8hKXxJbV5qZs_IQwzzDP6jiMVSPlpS2fuVU66IQ38');
        let res = headerUtils.getBearerToken(req);
        expect(res).to.not.be.null;
        done();
    });
    it("should return null", (done) => {
        const req = new Req('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBcmFiaW5kYSIsImxhc3ROYW1lIjoiTWFubmEiLCJhZ2UiOjI1LCJpYXQiOjE1ODM5Mjk2MTIsImV4cCI6MTU4MzkyOTczMiwiYXVkIjoibG9jYWxob3N0IiwiaXNzIjoibG9jYWxob3N0IiwianRpIjoiYWhpQWQifQ.AU8hKXxJbV5qZs_IQwzzDP6jiMVSPlpS2fuVU66IQ38');
        let res = headerUtils.getBearerToken(req);
        expect(res).to.be.null;
        done();
    });
});