const router = require('express').Router();

//router.use('/year',require('./year'));
router.use('/month', require('./month'));
router.use('/day', require('./day'));
router.use('/event', require('./event'));

module.exports = router;