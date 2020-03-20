const express = require("express");
const route = express();

const operationsController = require("../controllers/operations");
const { validateJWT } = require("../controllers/jwt");
const { getBearerToken } = require("../library/headerUtils");
const validatePermission = (req, res, next) => {
    let token = getBearerToken(req);
    if (token) {
        if (validateJWT(token)) {
            return next();
        } else {
            //token not valid
        }
    } else {
        //without token
    }
    err = new Error("Unauthorized");
    next(err);
}

route.get('/first10Multiples/:num', validatePermission, async (req, res) => {
    try {
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

route.post('/stringCharacterCalc', validatePermission, async (req, res) => {
    try {
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

route.get('/isAmstrong/:num', validatePermission, async (req, res) => {
    try {
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

exports.route = route;