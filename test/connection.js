const mongoose = require('mongoose');

// # to ignoring => DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
mongoose.set('useFindAndModify', false);

// // ES6 promise
mongoose.Promise = global.Promise;

// # HOOK MOCHA : the prosess will runing before test running because we need to instance a promise before() or .beforeEach()
before(function(done) {
    // # connection

    // ### MLAB MONGO NOT WORKING, TO SLOW WHEN DOING ASYNCHRONOUS SAVING DATA TO MONGO 
    // mongoose.connect('mongodb://userMongo:mongo123@ds157509.mlab.com:57509/portofolio', { useNewUrlParser: true });

    // ### WORKING PROPERLY ON LOCAL MONGO
    mongoose.connect('mongodb://localhost/portofolio', { useNewUrlParser: true });

    // # check connection
    mongoose.connection.once('open', function(){
        console.log('database connected!!');
        done();     //DONE, GOING TO NEXT PROCESS (beforeeach())
    }).on('error', function(err){
        console.log('error connection database', err);
    })
});

// ### CAUNTION
// # once()  is for check it 'open' for once when connection success
// # on() is for check connection status everytime when something error with connection

// # drop the collection before each test runnig so database can looks clean
beforeEach(function(done) {
    // drop collection asynchronus so we need a done function to know when the proses is done
    mongoose.connection.collections.mariochars.drop(function(){
        done();     //DONE, GOING TO NEXT PROCESS (running test)
    });
});

