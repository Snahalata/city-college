const mongoose = require('../config/citi-database.config');

const citiTimeSchema = mongoose.Schema({
    name:{type:String, required: true, unique: true}
});
const citiTimeModel = mongoose.model('time',citiTimeSchema);

module.exports = citiTimeModel;