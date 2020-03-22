const jwtLib = require("../library/jwt");
const { getBearerToken } = require("../library/headerUtils");

function processGenerateJWT(req, res, next){
    try {
        // console.log(req.body);
        let token = jwtLib.generateJWT(req.body);
        res.json({ "status": "SUCCESS", "access_token": token });
    } catch (e) {
        // console.log(e);
        err = new Error("Unknown");
        next(err);
    }
}

function processValidateJWT(req, res, next){
    try {
        // console.log(req.get("Authorization"));
        let token = getBearerToken(req);
        // console.log(token);

        if (token) {
            if (jwtLib.validateJWT(token)) {
                res.send({ "status": "True" });
            } else {
                res.send({ "status": "False" });
            }
        } else {
            res.status(401).send({ "status": "ERROR", "message": "Please Pass a valid bearer Token in Authorization Header" });
        }
    } catch (error) {
        // console.log(error);
        err = new Error("Unknown");
        next(err);
    }
}

module.exports = {processGenerateJWT, processValidateJWT};