const express = require("express");
const router = express.Router();


const { getAllBooks, getBook,createBook,updateBook,deleteBook} = require("../controllers/bookController");

router.get("/", getAllBooks);

  router.get("/:id", getBook);

  router.post("/create/new", createBook);

  router.put("/update/:_id", updateBook);
  
  router.delete("/delete/:_id", deleteBook);
  
 

module.exports = router;
