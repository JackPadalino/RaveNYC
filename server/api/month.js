const express = require('express');
const router = express.Router();

const {
    Month,Day,Event
} = require('../db');

// Routes to make
// view view day and all events
// create

// day/:id
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

// router.post('/:id',async(req,res,next)=>{
//     const dayId = req.params.id;
//     try{
//         const month = await Month.findByPk(dayId,{
//             include:[Day,Event]
//         });
//         res.send(month);
//     }catch(error){
//         next(error)
//     };
// });

module.exports = router;