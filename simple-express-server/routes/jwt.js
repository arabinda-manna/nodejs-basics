const express = require("express");
const route = express();

const { generateJWT, validateJWT } = require("../controllers/jwt");
const { getBearerToken } = require("../library/headerUtils");

route.post('/', (req, res) => {
    try {
        // console.log(req.body);
        let token = generateJWT(req.body);
        res.json({ "status": "SUCCESS", "access_token": token });
    } catch (e) {
        // console.log(e);
        res.sendStatus(500);
    }
});

route.post('/validate', (req, res) => {
    try {
        // console.log(req.get("Authorization"));
        let token = getBearerToken(req);
        if (token) {
            if (validateJWT(token)) {
                res.send("True");
            } else {
                res.send("False");
            }
        } else {
            res.status(403).send({ "status": "ERROR", "message": "Please Pass a valid bearer Token in Authorization Header" });
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

exports.route = route;