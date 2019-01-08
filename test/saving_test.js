const assert = require('assert');
const MarioChar = require('../models/mariochar');

// # decribe all test
describe('### Saving Test', function() {
    
    // # test 
    it('#Saving data mongo', function(done) {
        
        // instance of data
        var char = new MarioChar({
            name: 'MarioSs',
            age: 15
        });

        // # this running asynchronus so we need then() motod for waiting response from mongo and call done()
        // when tthis block is finished
        char.save()
            .then(function() {
                assert(!char.isNew);
                done();
            });

    });

});


// ### COUNTION
// # run 'npm run test'  and the test result will be appear 


