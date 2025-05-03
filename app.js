const express = require("express");
const app = express();

const PORT = 8080;
// require the following dependencies 
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

//middleware section 

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use (express.json());

//routes