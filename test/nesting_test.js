const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('### Nesting Test', () => {

    // # drop collection before rinning each test
    beforeEach((done) => {
        // drop author name
        mongoose.connection.collections.authors.drop(() => {
            done();
        })
    });

    // #test 1
    it('#Saving data to nesteed mongo', (done) => {
        var data = new Author({
            name: 'Azmi Fizal Fauzi',
            age: 26,
            books: [
                {
                    title: 'Buku sakti pemrograaman',
                    pages: 100,
                    year: 2018
                }
            ]
        });

        data.save()
            .then(() => {
                Author.findOne({name: 'Azmi Fizal Fauzi'})
                    .then((record) => {
                        assert(record.books.length === 1);
                        done();
                    });
            });
    });
    
    // #Test 2
    it('#Adding a book into author\'s book', (done) => {

        var data = new Author({
            name: 'Sujatmiko',
            age: 27,
            books: [
                {
                    title: 'C# Programming on one night',
                    pages: 200,
                    year: 2018
                }
            ]
        });

        data.save()
            .then(() => {
                Author.findOne({name: 'Sujatmiko'})
                    .then((record) => {
                        record.books.push({
                            title: 'C++ Programming for IoT',
                            pages: 180,
                            year: 2019
                        });

                        record.save()
                            .then(() => {
                                Author.findOne({name: 'Sujatmiko'})
                                    .then((result) => {
                                        assert(result.books.length === 2);
                                        done();
                                    });
                            });
                    });
            });

    });
});