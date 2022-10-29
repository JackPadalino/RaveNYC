const express = require('express');
const router = express.Router();

const {
    Month,Day,Event
} = require('../db');

// day/:id
router.get('/:monthId/:date',async(req,res,next)=>{
    const monthId = req.params.monthId;
    const date = req.params.date;
    try{
        const day = await Day.findOne({
            where:{
                monthId:monthId,
                date:date
            },
            include:[Month,Event]
        });
        res.send(day);
    }catch(error){
        next(error)
    };
});

module.exports = router;