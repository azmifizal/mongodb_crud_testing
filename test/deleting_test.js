const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('### Deleting Test', () => {

    beforeEach((done) => {
        var char = new MarioChar({
            name: 'Azmi',
            age: 24
        });

        char.save()
            .then(() => {
                done();
            });
    });

    it('#Deleting data mongo', (done) => {
        
        MarioChar.findOneAndDelete({name: 'Azmi'})
            .then(() => {
                MarioChar.findOne({name: 'Azmi'})
                    .then((result) => {
                        // assert(result === null);
                        assert(!result);
                        done();
                    });
            })

    });

});