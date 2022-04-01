const express = require('express');
const router = express.Router();
const snacksCtrl = require('../controllers/snacks')
const isLoggedIn = require('../config/auth')

router.get('/', snacksCtrl.index)
router.get('/new', isLoggedIn, snacksCtrl.new)
// router.get('/:id', isLoggedIn, snacksCtrl.show)
// router.post('/', isLoggedIn, snacksCtrl.create)
// router.get('/:id/edit', isLoggedIn, snacksCtrl.edit);
// router.put('/:id', isLoggedIn, snacksCtrl.update);


module.exports = router;

