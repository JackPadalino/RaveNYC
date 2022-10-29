const router = require('express').Router();

router.use('/month', require('./month'));
router.use('/day', require('./day'));
//router.use('/event', require('./event'));

module.exports = router;