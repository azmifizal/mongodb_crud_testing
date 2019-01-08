const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('### Finding Test', () => {

    var  char;

    // insert data to mongo
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Fizal',
            age: 17
        });
    
        char.save()
            .then(() => {
                done();
            });
    });

    it('#Finding data mongo by name', (done) => {

        MarioChar.findOne({name: 'Fizal'}).then((result) => {
            assert(result.name === 'Fizal');
            done();
        });

    });

    it('#Finding data mongo by id??', (done) => {
        
        MarioChar.findOne({_id: char._id}).then((result) => {
            assert(result._id.toString() === char._id.toString());
            done();
        });

    });

});