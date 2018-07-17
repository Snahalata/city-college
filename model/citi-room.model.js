const mongoose = require('../config/citi-database.config');

const citiRoomSchema = mongoose.Schema({
    name:{type:String, required: true, unique: true}
});
const citiRoomModel = mongoose.model('room',citiRoomSchema);

module.exports = citiRoomModel;