const jwt = require('jsonwebtoken');
let Chance = require('chance');
const privateKey = "88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589";

function generateJWT(object) {
    let chance = new Chance();
    return jwt.sign(object, privateKey, { algorithm: 'HS256', expiresIn: 600, audience: "localhost", issuer: "localhost", jwtid: chance.string({ length: 5 }) });
}

function validateJWT(token) {
    try {
        payload = jwt.verify(token, privateKey);
        return true;
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            return false;
        }
        return false;
    }
}

exports.generateJWT = generateJWT;
exports.validateJWT = validateJWT;