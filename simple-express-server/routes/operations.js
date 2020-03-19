const express = require("express");
const route = express();

const operationsController = require("../controllers/operations");
const { validateJWT } = require("../controllers/jwt");
const { getBearerToken } = require("../library/headerUtils");

route.get('/first10Multiples/:num', async (req, res) => {
    try {
        // console.log(req.params.num);
        if (!validatePermission(req)) {
            res.status(403).send({ "status": "ERROR", "message": "Please Pass a valid bearer Token in Authorization Header" });
            return false;
        }

        const validationData = await operationsController.first10MultiplesInputValidate(req.params);

        if (!validationData.status) {
            res.status(401).send({ "status": "ERROR", "message": validationData.message });
            return false;
        }

        res.send(operationsController.first10Multiples(req.params.num));
    } catch (e) {
        // console.log(e);
        res.sendStatus(500);
    }
});

route.post('/stringCharacterCalc', async (req, res) => {
    try {
        // console.log(req.body.string);
        if (!validatePermission(req)) {
            res.status(403).send({ "status": "ERROR", "message": "Please Pass a valid bearer Token in Authorization Header" });
            return false;
        }

        const validationData = await operationsController.stringCharacterCalcInputValidate(req.body);

        if (!validationData.status) {
            res.status(401).send({ "status": "ERROR", "message": validationData.message });
            return false;
        }

        res.send(operationsController.stringCharacterCalc(req.body.string));
    } catch (e) {
        // console.log(e);
        res.sendStatus(500);
    }
});

route.get('/isAmstrong/:num', async (req, res) => {
    try {
        // console.log(req.params.num);
        if (!validatePermission(req)) {
            res.status(403).send({ "status": "ERROR", "message": "Please Pass a valid bearer Token in Authorization Header" });
            return false;
        }

        const validationData = await operationsController.isAmstrongInputValidate(req.params);

        if (!validationData.status) {
            res.status(401).send({ "status": "ERROR", "message": validationData.message });
            return false;
        }

        res.send(operationsController.isAmstrong(req.params.num));
    } catch (e) {
        // console.log(e);
        res.sendStatus(500);
    }
});

const validatePermission = (req) => {
    let token = getBearerToken(req);
    if (token) {
        if (validateJWT(token)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

exports.route = route;