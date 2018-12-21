const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('### Updating Test', () => {

    var char;
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mongo',
            age: 25
        });

        char.save()
            .then(() => {
                done();
            })
    });

    it('#Updating data mongo', (done) => {
        MarioChar.findOneAndUpdate({name: 'Mongo'}, {name: 'SQLPostgree'})
            .then(() => {
                MarioChar.findById({_id: char._id})
                    .then((result) => {
                        assert(result.name === 'SQLPostgree');
                        done();
                    });
            });
    });

    // # Update operators adalah operator untuk mengubah sebagian data seperti increment di tulis pada 
    // parameter kedua dalam bentuk object
    it('#Updating data mongo with update operators', (done) => {

        // # contoh penggunaan update operators
        MarioChar.updateOne({name: 'Mongo'}, { $inc: {age: 1}})
            .then(() => {
                MarioChar.findOne({name: 'Mongo'})
                    .then((result) => {
                        assert(result.age === char.age + 1);
                        done();
                    });
            });

    });

});


// ### CAUNTION:
// Q: Could someone clarify for me how the following works: we update the name to Luigi and we're still able to 
// grab onto Mario and increment his weight; Robo shows the Mario record with an incremented weight, 
// yet the Luigi update test also passed but there is no Luigi to be found. Thanks for your reply

// A: Hi, I do think, that's because the function beforeEach() is triggered every time an it() function 
// is called, so when the first it() was executed the record in the db was Luigi, but then the second one (it()) 
// was executed abd beforeEach() was triggered again, so the last object created was Mario.