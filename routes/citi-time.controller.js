const express = require('express');
const router = express.Router();

const Time = require('../model/citi-time.model');

const objectId = require('mongoose').Types.ObjectId;

router.get('/',(req,res,next)=>{
    Time.find()
    .exec()
    .then( data=>{
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next)=>{
   const time = new Time({
       name:req.body.name
   });
   time.save()
   .then( data => {
       res.json({status:true,message:"Time added successfully"});

   })
   .catch(next);
});


router.put('/:id',(req,res,next)=>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:"Invalid objectId please try again"})
    }else{
        const citiRoom = {
            name:req.body.name
        }
        Time.findByIdAndUpdate(req.params.id,{$set:citiRoom},{new:true})
        .exec()
        .then(data => {
            res.json({status:true,message:"Time update successfully"});
        })
        .catch(next)
    }
});

router.delete('/:id',(req,res,next)=>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:"Invalid objectId please try again"})
    }else{
        Time.findByIdAndRemove(req.params.id)
        .exec()
        .then(data => {
            res.json({status:true,message:"Time deleted successfully"});
        })
        .catch(next)
    }
});



module.exports = router;