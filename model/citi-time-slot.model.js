const mongoose = require('../config/citi-database.config');

const citiTimeSlotSchema = mongoose.Schema({
   day_id:{type:mongoose.Schema.Types.ObjectId, require:true, ref:'day'},
   room_id:{type:mongoose.Schema.Types.ObjectId, require:true, ref:'room'},
   time_id:{type:mongoose.Schema.Types.ObjectId, require:true, ref:'time'}
});
const citiTimeSlotModel = mongoose.model('time_slot',citiTimeSlotSchema);

module.exports = citiTimeSlotModel;