const mongoose = require('../config/citi-database.config');

const citiDaySchema = mongoose.Schema({
    name:{type:String, required: true, unique: true}
});
const citiDayModel = mongoose.model('day',citiDaySchema);

module.exports = citiDayModel;