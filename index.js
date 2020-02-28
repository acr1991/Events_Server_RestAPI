const express = require("express");
const app = express();
const port = 4000;
const eventRouter = require("./event/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();
app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(eventRouter);

//Do not code under this line
app.listen(port, () => console.log("listening on port ", port));
