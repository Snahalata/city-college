const express = require('express');
const router = express.Router();

const Room = require('../model/citi-room.model');

const objectId = require('mongoose').Types.ObjectId;

router.get('/',(req,res,next)=>{
    Room.find()
    .exec()
    .then( data=>{
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next)=>{
   const room = new Room({
       name:req.body.name
   });
   room.save()
   .then( data => {
       res.json({status:true,message:"Room added successfully"});

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
        Room.findByIdAndUpdate(req.params.id,{$set:citiRoom},{new:true})
        .exec()
        .then(data => {
            res.json({status:true,message:"Room update successfully"});
        })
        .catch(next)
    }
});

router.delete('/:id',(req,res,next)=>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:"Invalid objectId please try again"})
    }else{
        Room.findByIdAndRemove(req.params.id)
        .exec()
        .then(data => {
            res.json({status:true,message:"Room deleted successfully"});
        })
        .catch(next)
    }
});



module.exports = router;