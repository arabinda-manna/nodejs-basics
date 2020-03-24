const express = require('express');

const route = express();

const jwtController = require('../controllers/jwt');

route.post('/', jwtController.processGenerateJWT);

route.post('/validate', jwtController.processValidateJWT);

exports.route = route;
