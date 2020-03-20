const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8082;
app.use(bodyParser.json());

const jwtRoute = require("./routes/jwt");
const operationsRoute = require("./routes/operations");
app.use('/jwt', jwtRoute.route);
app.use('/operations', operationsRoute.route);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(function (error, req, res, next) {
    // console.log(error.message);
    if(error.message == "Unauthorized"){
        res.status(401).send({ "status": "ERROR", "message": "Please Pass a valid bearer Token in Authorization Header" });;
    }
});

app.listen(port, () => console.log(`Express App listening on port ${port}!`))

module.exports = app;