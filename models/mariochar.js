const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// # chema of the collection (blueprint collection)
const MarioCharSchema = new Schema({
    name: String,
    age: Number
});

// # Model
// # param_1 : collection/table name on database
// # param_2 : Which schema we wanna use
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;