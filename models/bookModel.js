const mongoose = require("mongoose"); 

const {Schema} = mongoose;

const bookSchema = new Schema({
    title: {
        type:String,
        required: true,
        trim: true, },
    author:{
        type: String,
        required: true,
        trim: true},
    publisher:{
        type:String,
        required: true,
        trim: true},
    genre: {
        type: String,
        required: true,
        trim: true,},
    pages: {
        type: Number,
        required: true,},
    rating: {
        type: Number,
        required: true,},
    Price: {
        type: Number,
        required: true,},
    synopsis: {
        type: String,
        required: true,
        trim: true,},
    image: {
        type: String,
        required: true,
        trim: true,}
});

const Book = mongoose.model("Book", bookSchema);

module.exports= Book;