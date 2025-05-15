const books = require("./data/books");

const getAllBooks = async (req,res,next) => {
    .json({
        success:{message: "All Books Retrieved"},
        Data: {book:getAllBooks},
        statusCode:201
    });
    
}