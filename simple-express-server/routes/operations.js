const express = require('express');

const route = express();

const operationsController = require('../controllers/operations');
const { validateJWT } = require('../library/jwt');
const { getBearerToken } = require('../library/headerUtils');
const {
  first10MultiplesInputValidate,
  stringCharacterCalcInputValidate,
  isAmstrongInputValidate,
} = require('../library/operationsValidation');

const validatePermission = (req, res, next) => {
  const token = getBearerToken(req);
  if (token) {
    if (validateJWT(token)) {
      return next();
    }
    // token not valid
  } else {
    // without token
  }
  const err = new Error('Unauthorized Access Token');
  next(err);
};

route.get(
  '/first10Multiples/:num',
  [validatePermission, first10MultiplesInputValidate],
  operationsController.processFirst10Multiples,
);

route.post(
  '/stringCharacterCalc',
  [validatePermission, stringCharacterCalcInputValidate],
  operationsController.processStringCharacterCalc,
);

route.get(
  '/isAmstrong/:num',
  [validatePermission, isAmstrongInputValidate],
  operationsController.processAmstrong,
);

exports.route = route;
