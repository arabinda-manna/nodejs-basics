const express = require("express");
const route = express();

const { generateJWT, validateJWT } = require("../controllers/jwt");

route.post('/', (req, res) => {
    try{
        console.log(req.body);   
        let token = generateJWT(req.body);
        res.send(token);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

route.post('/validate', (req, res) => {
    try {
        let status = validateJWT(req.body.token);
        if(status){
            res.send("True");
        }else{
            res.send("False");
        }
    } catch (error) {
        console.log(e);
        res.sendStatus(500);
    }
});

exports.route = route;