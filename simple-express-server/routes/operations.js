const express = require("express");
const route = express();

const { first10Multiples, stringCharacterCalc } = require("../controllers/operations");
route.get('/first10Multiples/:num', (req, res) => {
    try {
        console.log(req.params.num);
        
        res.send(first10Multiples(req.params.num));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

route.post('/stringCharacterCalc', (req, res) => {
    try {
        console.log(req.body.string);
        
        res.send(stringCharacterCalc(req.body.string));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


exports.route = route;