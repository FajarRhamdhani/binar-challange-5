const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.home);
router.get('/game', controller.game);
router.post('/login', controller.login);


module.exports = router;