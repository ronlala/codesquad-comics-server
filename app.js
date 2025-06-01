//Entrypoint for app js 
require("dotenv").config();
require("./config/connection");
require("./config/authStrategy");

const express = require("express");
const app = express();
// const for bookRoutes 

const bookRoutes = require("./routes/bookRoutes");


const PORT = process.env.PORT || 8080;
// require the following dependencies 
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

//middleware section 

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use (express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/books",bookRoutes);

app.use((err,req,res,next) =>{
   if (err.code === 11000){
    return res.status(err.status || 400).json({
      error:{message: "Already have an account? Try Loggingin in."},
      statusCode: err.status || 400,
    });
  }
  return res.status(err.status || 500).json({
    error:{message: err.message || "Internal server error."},
    statusCode: err.status || 500,
  });
});



    app.listen(PORT,() =>{
      console.log(`Server is listening on port ${PORT},Connection has been established`);
      console.log(`http://localhost:${PORT}/`)
    });