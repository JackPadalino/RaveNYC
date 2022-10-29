const express = require('express');
const router = express.Router();

const {
    Month,Day,Event
} = require('../db');

// month/
router.get('/',async(req,res,next)=>{
    try{
        const months = await Month.findAll({
            //include:[Day,Event]
        });
        res.send(months);
    }catch(error){
        next('Oops! Something went wrong!')
    };
});

// month/:id
router.get('/:id',async(req,res,next)=>{
    const dayId = req.params.id;
    try{
        const month = await Month.findByPk(dayId,{
            include:[Day,Event]
        });
        res.send(month);
    }catch(error){
        next(error)
    };
});

// month/create
router.post('/create',async(req,res,next)=>{
    const date = req.body.date;
    const yearId = req.body.yearId;
    try{
        const newMonth = await Month.create({
            date:date,
            yearId:yearId
        });
        const days=[];
        for(let i=1;i<32;i++){
            const day={monthId:newMonth.id};
            days.push(day);
        };
        const promises = days.map((day)=>Day.create(day));
        await Promise.all(promises);
        res.sendStatus(201);
    }catch(error){
        next(error)
    };
});

module.exports = router;