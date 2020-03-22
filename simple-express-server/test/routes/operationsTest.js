const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require("../../index");
const expect = chai.expect;

const operationsLib = require("../../library/operations");
const sinon = require("sinon");

describe("operations controller Integration Testing", () => {
    let token = null; //to be use to call apis later
    before((done) => {
        chai
        .request(app)
        .post('/jwt')
        .set('content-type', 'application/json')
        .send({
            "firstName": "Arabinda",
            "lastName": "Manna",
            "age": 25
        })
        .end((err, res) => {
            token = res.body.access_token;
            // console.log(token);
            done();
        });
    });

    describe("/operations/first10Multiples/:num endpoint Integration Testing", () => {
        it("Positive output test", (done) => {
            chai
                .request(app)
                .get('/operations/first10Multiples/1')
                .set('Authorization', 'Bearer ' + token)
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.text).to.be.equal("1 1 1 1 1 1 1 1 1 1");
                    done();
                });
        });
        it("Negetive output test without authorization header", (done) => {
            chai
                .request(app)
                .get('/operations/first10Multiples/1')
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(401);
                    done();
                });
        });
        it("Negetive output test with input error", (done) => {
            chai
                .request(app)
                .get('/operations/first10Multiples/100')
                .set('Authorization', 'Bearer ' + token)
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(403);
                    done();
                });
        });
        it("Negetive output test with throwing error", (done) => {
            const error = new Error("first10Multiples throws an error");
            sinon.stub(operationsLib, "first10Multiples").throws(error);
            chai
                .request(app)
                .get('/operations/first10Multiples/1')
                .set('Authorization', 'Bearer ' + token)
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(500);
                    operationsLib.first10Multiples.restore();
                    done();
                });
        });
        it("Negetive output test with expired authorization header", (done) => {
            chai
                .request(app)
                .get('/operations/first10Multiples/1')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBcmFiaW5kYSIsImxhc3ROYW1lIjoiTWFubmEiLCJhZ2UiOjI1LCJpYXQiOjE1ODQ0NDk3MjksImV4cCI6MTU4NDQ1MDMyOSwiYXVkIjoibG9jYWxob3N0IiwiaXNzIjoibG9jYWxob3N0IiwianRpIjoiR2x1YU0ifQ.GNWHXggfh23BPx466wLl5NdgYKw9caieLeFYmlvypz4')
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(401);
                    done();
                });
        });
    });

    describe("/operations/stringCharacterCalc endpoint Integration Testing", () => {
        it("Positive output test", (done) => {
            chai
            .request(app)
                .post('/operations/stringCharacterCalc')
                .set('content-type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({
                    "string": "NodeJs"
                })
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.text).to.be.equal('{"n":1,"o":1,"d":1,"e":1,"j":1,"s":1}');
                    done();
                });
        });
        it("Negetive output test without authorization header", (done) => {
            chai
            .request(app)
                .post('/operations/stringCharacterCalc')
                .set('content-type', 'application/json')
                .send({
                    "string": "NodeJs"
                })
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(401);
                    done();
                });
        });
        it("Negetive output test with input error", (done) => {
            chai
                .request(app)
                .post('/operations/stringCharacterCalc')
                .set('content-type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({
                    "string": ""
                })
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(403);
                    done();
                });
        });
        it("Negetive output test with throwing error", (done) => {
            const error = new Error("stringCharacterCalc throws an error");
            sinon.stub(operationsLib, "stringCharacterCalc").throws(error);
            chai
                .request(app)
                .post('/operations/stringCharacterCalc')
                .set('content-type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({
                    "string": "NodeJs"
                })
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(500);
                    operationsLib.stringCharacterCalc.restore();
                    done();
                });
        });
        it("Negetive output test with expired authorization header", (done) => {
            chai
                .request(app)
                .post('/operations/stringCharacterCalc')
                .set('content-type', 'application/json')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBcmFiaW5kYSIsImxhc3ROYW1lIjoiTWFubmEiLCJhZ2UiOjI1LCJpYXQiOjE1ODQ0NDk3MjksImV4cCI6MTU4NDQ1MDMyOSwiYXVkIjoibG9jYWxob3N0IiwiaXNzIjoibG9jYWxob3N0IiwianRpIjoiR2x1YU0ifQ.GNWHXggfh23BPx466wLl5NdgYKw9caieLeFYmlvypz4')
                .send({
                    "string": "NodeJs"
                })
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(401);
                    done();
                });
        });
    });

    describe("/operations/isAmstrong/:num endpoint Integration Testing", () => {
        it("Positive output test", (done) => {
            chai
            .request(app)
                .get('/operations/isAmstrong/153')
                .set('Authorization', 'Bearer ' + token)
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.text).to.be.equal("153 is a Amstrong number");
                    done();
                });
        });
        it("Negetive output test without authorization header", (done) => {
            chai
            .request(app)
                .get('/operations/isAmstrong/153')
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(401);
                    done();
                });
        });
        it("Negetive output test with input error", (done) => {
            chai
                .request(app)
                .get('/operations/isAmstrong/-100')
                .set('Authorization', 'Bearer ' + token)
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(403);
                    done();
                });
        });
        it("Negetive output test with throwing error", (done) => {
            const error = new Error("isAmstrong throws an error");
            sinon.stub(operationsLib, "isAmstrong").throws(error);
            chai
                .request(app)
                .get('/operations/isAmstrong/153')
                .set('Authorization', 'Bearer ' + token)
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(500);
                    operationsLib.isAmstrong.restore();
                    done();
                });
        });
        it("Negetive output test with expired authorization header", (done) => {
            chai
                .request(app)
                .get('/operations/isAmstrong/153')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBcmFiaW5kYSIsImxhc3ROYW1lIjoiTWFubmEiLCJhZ2UiOjI1LCJpYXQiOjE1ODQ0NDk3MjksImV4cCI6MTU4NDQ1MDMyOSwiYXVkIjoibG9jYWxob3N0IiwiaXNzIjoibG9jYWxob3N0IiwianRpIjoiR2x1YU0ifQ.GNWHXggfh23BPx466wLl5NdgYKw9caieLeFYmlvypz4')
                .end((err, res) => {
                    // console.log(res);
                    expect(err).to.be.null;
                    expect(res).to.have.status(401);
                    done();
                });
        });
    });

    after(() => {
        token = null;
    })
});