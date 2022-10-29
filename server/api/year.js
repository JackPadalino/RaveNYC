const express = require('express');
const router = express.Router();

const {
    Year,Month,Day,Event
} = require('../db');

// year/
router.get('/',async(req,res,next)=>{
    try{
        const years = await Year.findAll({
            //include:[Day,Event]
        });
        res.send(years);
    }catch(error){
        next('Oops! Something went wrong!')
    };
});

// year/:id
router.get('/:id',async(req,res,next)=>{
    const yearId = req.params.id;
    try{
        const year = await Year.findByPk(yearId,{
            //include:[Month]
        });
        res.send(year);
    }catch(error){
        next(error)
    };
});

// year/create
router.post('/create',async(req,res,next)=>{
    const date = req.body.date;
    try{
        const newYear = await Year.create({
            date:date,
        });
        res.sendStatus(201);
    }catch(error){
        next(error)
    };
});

// year/delete/:id
router.delete('/delete/:id',async(req,res,next)=>{
    const yearId = req.params.id;
    try{
        await Year.destroy({
            where:{
                id:yearId
            }
        });
        res.sendStatus(200);
    }catch(error){
        next(error)
    };
});

module.exports = router;