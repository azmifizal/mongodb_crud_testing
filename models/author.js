const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    pages: Number,
    year: Number
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

module.exports = mongoose.model('author', AuthorSchema);


// ### CAUNTION:
// # Example of relational/sub documnet data satu document seperti author punya banyak buku