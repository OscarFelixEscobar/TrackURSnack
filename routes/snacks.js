const express = require('express');
const router = express.Router();
const snacksCtrl = require('../controllers/snacks')
const isLoggedIn = require('../config/auth')

router.get('/', snacksCtrl.index)
router.get('/new', snacksCtrl.new)
router.get('/:id', snacksCtrl.show)
router.post('/', snacksCtrl.create)
router.get('/:id/edit', snacksCtrl.edit);
router.put('/:id', snacksCtrl.update);


module.exports = router;

