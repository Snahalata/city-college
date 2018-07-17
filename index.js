const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const citiDay = require('./routes/citi-day.controller');
const citiRoom = require('./routes/citi-room.controller');
const citiTime = require('./routes/citi-time.controller');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


app.use('/citi-day',citiDay);
app.use('/citi-room',citiRoom);
app.use('/citi-time',citiTime);


app.use((error,req,res,next)=>{
    res.json({status:false,message:''+error})
});

app.listen(3000,()=>{
    console.log('Node server strated on port 3000');
});