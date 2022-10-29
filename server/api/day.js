const express = require('express');
const router = express.Router();

const {
    Month,Day,Event
} = require('../db');

// day/:id
router.get('/:id',async(req,res,next)=>{
    const dayId = req.params.id;
    try{
        const day = await Day.findByPk(dayId,{
            include:[Month,Event]
        });
        res.send(day);
    }catch(error){
        next(error)
    };
});

module.exports = router;