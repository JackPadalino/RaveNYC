const express = require('express');
const router = express.Router();

const {
    Month,Day,Event
} = require('../db');

// event/
router.get('/',async(req,res,next)=>{
    try{
        const events = await Event.findAll({
            //include:[Day,Event]
        });
        res.send(events);
    }catch(error){
        next('Oops! Something went wrong!')
    };
});

// event/:id
router.get('/:id',async(req,res,next)=>{
    const eventId = req.params.id;
    try{
        const event = await Event.findByPk(eventId,{
            include:[Month,Day]
        });
        res.send(event);
    }catch(error){
        next(error)
    };
});

// event/create
router.post('/create',async(req,res,next)=>{
    const artist = req.body.artist;
    const venue = req.body.venue;
    const dayId = req.body.dayId;
    const monthId = req.body.monthId;
    try{
        await Event.create({
            artist:artist,
            venue:venue,
            monthId:monthId,
            dayId:dayId
        });
        res.sendStatus(201);
    }catch(error){
        next(error)
    };
});

// event/delete/:id
router.delete('/delete/:id',async(req,res,next)=>{
    const eventId = req.params.id;
    try{
        await Event.destroy({
            where:{
                id:eventId
            }
        });
        res.sendStatus(204);
    }catch(error){
        next(error)
    };
});

module.exports = router;