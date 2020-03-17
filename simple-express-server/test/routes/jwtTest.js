const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require("../../index");
const should = chai.should();
const expect = chai.expect;

describe('Integration Testing of /jwt endpoint', () => {
    it('should return an object', done => {
        chai.request('http://localhost:8082').post('/jwt')
        .set('content-type', 'application/json')
        .send({
            "firstName": "Arabinda",
            "lastName": "Manna",
            "age": 25
        })
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.have.all.keys(['status', 'access_token']);
            done();
        });
    });
});