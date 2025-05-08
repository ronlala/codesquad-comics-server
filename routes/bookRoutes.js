const express = require("express");
const router = express.Router();



router.get("/", (req,res,next) => {
    res.status(200).json({
      success:{
      Message:"This Route points to the Create Book Page"},
      statusCode:200});
 
  });

  router.get("/:id", (req,res,next) => {
      res.status(200).json({
          success:{
          Message:"This will Send a single book by its id"},
          statusCode:200});
  });
 
  router.post("/create/new", (req,res,next) => {
      res.status(200).json({
          success:{
          Message:"This will create a new book"},
          statusCode:200});
  });


  router.put("/update/:id", (req,res,next) => {
      res.status(200).json({
          success:{
          Message:"This will update a book by its id"},
          statusCode:200});

  });
 router.delete("/delete/:id", (req,res,next) => {
      res.status(200).json({
          success:{
          Message:"This will delete a book by its id"},
          statusCode:200});
  });
module.exports = router;
