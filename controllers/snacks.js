const Snack = require('../models/snack')

module.exports = {
    index,
    new: newSnack,
    create
}

function index(req, res) {
    Snack.find({}, function(err, snack) {
        res.render('snacks/index', {snack})
    })
}

function newSnack(req, res) {
    res.render('snacks/new', { title: 'Add Snack' });
}

function create(req, res) {
    const snack = {
        name: req.body.name,
        kind: req.body.kind,
        rating: req.body.rating
    }
    Snack.create(snack, function(err, snacks) {
        if (err) {
            return res.redirect('/snacks/new')
        } 
        else {
            snacks.save();
            res.redirect(`/snacks`)
        }
    })
}
  