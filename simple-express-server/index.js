const express = require('express');
const bodyParser = require('body-parser');
const { isCelebrate } = require('celebrate');

const app = express();
const port = process.env.PORT || 8082;
app.use(bodyParser.json());

const jwtRoute = require('./routes/jwt');
const operationsRoute = require('./routes/operations');

app.use('/jwt', jwtRoute.route);
app.use('/operations', operationsRoute.route);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// eslint-disable-next-line
const errorHandler = function (error, req, res, next) {
  // console.log(error.message);
  let resStatus; let
    resData = {};
  if (error.message === 'Unauthorized Access Token') {
    resStatus = 401;
    resData = {
      status: 'ERROR',
      message: 'Please Pass a valid bearer Token in Authorization Header',
    };
  } else if (isCelebrate(error)) {
    // console.log(error);
    resStatus = 403;
    resData = { status: 'ERROR', message: error.message };
  } else {
    resStatus = 500;
  }
  res.status(resStatus).json(resData);
};

app.use(errorHandler);

app.listen(port, () => console.log(`Express App listening on port ${port}!`));

module.exports = app;
