const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"))

app.use(express.json());
app.use(routes);



app.listen(3000, console.log("Start server..."));