const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8082;
app.use(bodyParser.json());

const jwtRoute = require("./routes/jwt");
const operationsRoute = require("./routes/operations");
app.use('/jwt',jwtRoute.route);
app.use('/operations', operationsRoute.route);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Express App listening on port ${port}!`))

module.exports = app;