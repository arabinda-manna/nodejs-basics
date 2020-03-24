const operations = require('../library/operations');

function processFirst10Multiples(req, res, next) {
  try {
    res.send(operations.first10Multiples(req.params.num));
  } catch (e) {
    // console.log(e);
    const err = new Error('Unknown');
    next(err);
  }
}

function processStringCharacterCalc(req, res, next) {
  try {
    res.send(operations.stringCharacterCalc(req.body.string));
  } catch (e) {
    // console.log(e);
    const err = new Error('Unknown');
    next(err);
  }
}

function processAmstrong(req, res, next) {
  try {
    res.send(operations.isAmstrong(req.params.num));
  } catch (e) {
    // console.log(e);
    const err = new Error('Unknown');
    next(err);
  }
}

module.exports = { processFirst10Multiples, processStringCharacterCalc, processAmstrong };
