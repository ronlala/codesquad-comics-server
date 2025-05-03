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
app.use( urlencoded());
app.use(static());

//routes with send method

// app.get("/", (req,res,next) => {
//   res.send(" ")

// });

// app.get("/api/books", (req,res,next) => {
//     res.send(" This will Send all the book data")
  
//   });

//   app.get("/api/books/:id", (req,res,next) => {
//     res.send(" This will Send a single book by its id")
  
//   });

//   app.get("/api/books/create/new", (req,res,next) => {
//     res.send("This will create a new book")
  
//   });
//   app.get("/api/books/update/:id", (req,res,next) => {
//     res.send("This will update a book by its id")
  
//   });
//   app.get("/api/books/delete/:id", (req,res,next) => {
//     res.send("This will delete a book by its id ")
  
//   });

//Refactored roudtes for .status().json()

app.get("/", (req,res,next) => {
    res.status(" ")
    statusCode:200;
  });
  
  app.get("/api/books", (req,res,next) => {
      res.status(" This will Send all the book data")
      statusCode:200;
    });
  
    app.get("/api/books/:id", (req,res,next) => {
      res.status(" This will Send a single book by its id")
      statusCode:200;
    });
  
    app.get("/api/books/create/new", (req,res,next) => {
      res.status("This will create a new book")
      statusCode:200;
    });
    app.get("/api/books/update/:id", (req,res,next) => {
      res.status("This will update a book by its id")
      statusCode:200;
    
    });
    app.get("/api/books/delete/:id", (req,res,next) => {
      res.status("This will delete a book by its id ")
      statusCode:200;
    });

    // have the app.listen() start the server and send a console log to
    // to the terminal with start message that says `The server is listening on port ${PORT}`