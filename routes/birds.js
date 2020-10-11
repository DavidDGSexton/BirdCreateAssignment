var express = require('express');
var router = express.Router();
const axios = require('axios');
var birdsController = require('../controllers/birdsController');

router.get('/create', birdsController.get_bird_create);

router.post('/create', birdsController.post_create_bird);



module.exports = router;
