const express = require("express");
const app = express();
// const for bookRoutes 

const bookRoutes = require("./routes/bookRoutes");


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
app.use(express.urlencoded({extended:true}));
app.use("/api/books",bookRoutes);




    app.listen(PORT,() =>{
      console.log(`Server is listening on port ${PORT},Connection has been established`);
      console.log(`http://localhost:${PORT}/`)
    });