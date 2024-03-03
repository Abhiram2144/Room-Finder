const router = require('express').Router();
const { createReview } = require('../controller/review');

router.post('/create/:uid/:pgid', createReview);

module.exports = router;