const express = require("express");
const router = express.Router();


const { getAllBooks, getBook,createBook,updateBook,deleteBook} = require("../controllers/bookController");

router.get("/", getAllBooks);

  router.get("/:_id", getBook);

  router.post("/create/new", createBook);

  router.put("/update/:id", updateBook);
  
  router.delete("/delete/:id", deleteBook);
  
 

module.exports = router;
