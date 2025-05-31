const { get } = require("mongoose");
const booksLibrary = require("../data/books");

const getAllBooks = async (req,res,next) => {
    const books = booksLibrary;
    try{
    return res.status(200).json({
      success:{
      Message:"This Route points to all books"},
      data:{books},
      statusCode: 200,
  })
} catch (error){
    response.status(400).json({
        error: {message: "Resource not found. Search again."},
        statusCode: 400,
    })
}
};

const getBook = async(req,res,next) => {
    const {id} = req.param;
    try{
        const books = booksLibrary.find(booksLibrary =>
            bookInventory._id == _id);
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

const newBook = {
  title,
  author,
  publisher,
  genre,
  pages,
  rating,
  synopsis,
  image
};
try{
    booksLibrary.push(newBook)
    return res.status(201).json({
        success:{message: "New book has been added to the Libray "},
        data: {newBook},
    })
} catch (error){
    return res.status(400).json({
        error:{ message: " There was an error with creating your new book in the libray"},
    });
}
};


const updateBook = async(req,res,next) => {
    const{id} = req.params;
    const {title , author, publisher,  genre, pages, rating, synopsis, image} = req.body;


try{
    const updateBook = {
        title,
        author,
        publisher,
        genre,
        pages,
        rating,
        synopsis,
        image
      };
    booksLibrary.push(newBook)
    
    const book = booksData.find((book) => book._id === _id);
    booksData[foundBookIndex] = newBook;
    
    return res.status(201).json({
        success:{message: "New book has been added to the Libray "},
        data: {updatedBook},
    });
} catch (error){
    return res.status(400).json({
        error:{ message: " There was an error updating your book in the library"},
    });
}
};

const deleteBook = async (req,res,next) => {
    
    const{id} = req.params;
    
    try {
        const removeBook =books.filter((book) => book._id !== _id);
        console.log(removeBook)

        return res.status(200).json({
        success: { message: " Book has been deleted from the library"},
        });
    } catch (error) {
        return res.status(400).json({
            error: { message: "There is an error deleting a book"},
        });
    }
};

module.exports ={getAllBooks, getBook, createBook, updateBook, deleteBook};

//   router.get("/:id", (req,res,next) => {
//       res.status(200).json({
//           success:{
//           Message:"This will Send a single book by its id"},
//           statusCode:200});
//   });
 
//   router.post("/create/new", (req,res,next) => {
//       res.status(200).json({
//           success:{
//           Message:"This will create a new book"},
//           statusCode:200});
//   });


//   router.put("/update/:id", (req,res,next) => {
//       res.status(200).json({
//           success:{
//           Message:"This will update a book by its id"},
//           statusCode:200});

//   });
//  router.delete("/delete/:id", (req,res,next) => {
//       res.status(200).json({
//           success:{
//           Message:"This will delete a book by its id"},
//           statusCode:200});
//   });
// module.exports = router;
