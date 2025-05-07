const express = require('express');
const routes = require("../routes/routes.js");
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(path.join(__dirname, '../estilos')));

app.use("/", routes);

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});