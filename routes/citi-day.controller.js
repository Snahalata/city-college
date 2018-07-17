const express = require('express');
const router = express.Router();

const Day = require('../model/citi-day.model');

const objectId = require('mongoose').Types.ObjectId;

router.get('/',(req,res,next)=>{
    Day.find()
    .exec()
    .then( data=>{
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next)=>{
   const day = new Day({
       name:req.body.name
   });
   day.save()
   .then( data => {
       res.json({status:true,message:"Day added successfully"});

   })
   .catch(next);
});


router.put('/:id',(req,res,next)=>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:"Invalid objectId please try again"})
    }else{
        const citiDay = {
            name:req.body.name
        }
        Day.findByIdAndUpdate(req.params.id,{$set:citiDay},{new:true})
        .exec()
        .then(data => {
            res.json({status:true,message:"Day update successfully"});
        })
        .catch(next)
    }
});

router.delete('/:id',(req,res,next)=>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:"Invalid objectId please try again"})
    }else{
        Day.findByIdAndRemove(req.params.id)
        .exec()
        .then(data => {
            res.json({status:true,message:"Day deleted successfully"});
        })
        .catch(next)
    }
});



module.exports = router;