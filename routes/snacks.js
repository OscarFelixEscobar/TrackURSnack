const express = require('express');
const router = express.Router();
const snacksCtrl = require('../controllers/snacks')
const isLoggedIn = require('../config/auth')

router.get('/', snacksCtrl.index)
router.get('/new', isLoggedIn, snacksCtrl.new)
router.get('/:id', isLoggedIn, snacksCtrl.show)
router.post('/', isLoggedIn, snacksCtrl.create)
router.delete('/:id', snacksCtrl.delete)
router.get('/:id/edit', snacksCtrl.edit);
router.put('/:id', snacksCtrl.update);



module.exports = router;

