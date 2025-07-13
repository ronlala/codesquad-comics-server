const { get } = require("mongoose");
const Book = require("../models/bookModel");
// const booksLibrary = require("../data/books");



const getAllBooks = async (req,res,next) => {
    // const books = booksLibrary;
    try{
        const books = await Book.find({});
    return res.status(200).json({
      success:{
      Message:"This Route points to all books"},
      data:{books},
      statusCode: 200,
  });
} catch (error){
    // response.status(400).json({
    //     error: {message: "Resource not found. Search again."},
    //     statusCode: 400,
    // })
    return next(error)
}
};

const getBook = async(req,res,next) => {
    const {id} = req.params;
    try{
        // const books = booksLibrary.find(booksLibrary =>
        //     bookInventory._id ===Number( _id));
           
        if(!id){
            throw new Error("Id is required");
        }
        const book = book.findbyId(id)
        if (!book) {
            throw new Error("Book not found");
        
        }
        
        return res.status(200).json({
                success:{message: "Book found"},
                data: {book},
            });
        } catch (error){
          return res.status(400).json({
           error: {message: "There is an error when retrieveing a book"},
          });
        }
    };


const createBook = async(req,res,next) => {
    const {title , author, publisher,  genre, pages, rating, synopsis, image} = req.body;


try{
if  (!title||!author||!pages){
    throw new Error("Missing some Required information try again")
}

 const newBook = new Book({
   title,
   author,
   publisher,
   genre,
   pages,
   rating,
   synopsis,
   image
});
await newBook.save()

    // booksLibrary.push(newBook)
    return res.status(201).json({
        success:{message: "New book has been added to the Libray "},
        data: {newBook},
    })
} catch (error){
    return next (error)
}
};

// changed to udpateBook same as editBook. i changed it for learning purposes
const updateBook = async(req,res,next) => {
    const{id} = req.params;
    const {title , author, publisher,  genre, pages, rating, synopsis, image} = req.body;


try{

    if  (!title||!author||!pages){
    throw new Error("Missing some Required information try again")
}
    const updatedBook = await Book.findByIdAndUpdate(
        id,
        {
        $set:{title,
        author,
        publisher,
        genre,
        pages,
        rating,
        synopsis,
        image
      }
    },
    {new: true}
);
  
    if (!updatedBook){
        throw new Error("Book not found");
    }
    return res.status(201).json({
        success:{message: "Book has now been updated"},
        data: {updatedBook},
        statusCode: 201
    });
} catch (error){ return next(error);
 

}
};

const deleteBook = async (req,res,next) => {
    
    const{id} = req.params;

    
    try {
    if (!id){
        throw new Error("Book not found id needed");
    }
    
     await Book.findByIdAndDelete(id);
        return res.status(200).json({
        success: { message: " Book has been deleted from the library"},
        });
    } catch (error) {
       
        return next(error)
    }
};

module.exports ={getAllBooks, getBook, createBook, updateBook, deleteBook};

