const express = require("express");
const route = express();

const { first10Multiples, stringCharacterCalc, isAmstrong } = require("../controllers/operations");
const { validateJWT } = require("../controllers/jwt");
const { getBearerToken } = require("../library/headerUtils");

const Joi = require('@hapi/joi');

route.get('/first10Multiples/:num', async (req, res) => {
    try {
        // console.log(req.params.num);
        if (!validatePermission(req)){
            res.status(403).send({ "status": "ERROR", "message": "Please Pass a valid bearer Token in Authorization Header" });
            return false;
        }

        const schema = Joi.object({
            num: Joi.number()
                .integer()
                .min(0)
                .max(10)
                .required(),
        });
        try {
            const value = await schema.validateAsync(req.params);
            console.log(value);
        }
        catch (err) {
            res.status(401).send({"status": "ERROR", "message": "Invalid number passed. Number must be between 0-10"})
            return false;
        }

        res.send(first10Multiples(req.params.num));
    } catch (e) {
        console.log(e);
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
        
        const schema = Joi.object({
            string: Joi.string()
                .min(1)
                .max(256).required(),
        });
        try {
            const value = await schema.validateAsync(req.body);
            console.log(value);
        }
        catch (err) {
            res.status(401).send({ "status": "ERROR", "message": "Invalid string passed. String must have length between 1-256" })
            return false;
        }

        res.send(stringCharacterCalc(req.body.string));
    } catch (e) {
        console.log(e);
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

        const schema = Joi.object({
            num: Joi.number()
                .integer()
                .min(0)
                .max(10000000)
                .required(),
        });
        try {
            const value = await schema.validateAsync(req.params);
            console.log(value);
        }
        catch (err) {
            res.status(401).send({ "status": "ERROR", "message": "Invalid number passed. Number must be between 0-10000000" })
            return false;
        }

        res.send(isAmstrong(req.params.num));
    } catch (e) {
        console.log(e);
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