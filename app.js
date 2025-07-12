//Entrypoint for app js 
require("dotenv").config();
require("./config/connection");
require("./config/authStrategy.js");

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require ("node:path");

const session = require("express-session");
const passport = require("passport");

const app = express();



const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes.js");


const PORT = process.env.PORT || 8080;
// require the following dependencies 



//middleware section 

app.use(cors({ credentials: true, origin: true }));
app.use(morgan("dev"));
app.use(helmet({contentSecurityPolicy: false}));



app.use (express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET_KEY,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.session());
app.use(passport.initialize());



app.use("/api/books",bookRoutes);
app.use("/auth", authRoutes);




// app.use(require('express-session')({ 
//   secret: process.env.SECRET_KEY,
//   resave: true,
//   saveUninitialized: true
//  }));




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

app.get("/",(req,res,next) => {
  res.status( 200).json({
    success:{ message: "You did that" },
    statusCode:(200),

});
})

    app.listen(PORT,() =>{
      console.log(`Server is listening on port ${PORT},Connection has been established`);
      console.log(`http://localhost:${PORT}/`)
    });
