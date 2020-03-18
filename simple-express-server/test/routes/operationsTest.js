const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require("../../index");
const expect = chai.expect;

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
    });

    after(() => {
        token = null;
    })
});