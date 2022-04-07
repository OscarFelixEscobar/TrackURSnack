const Snack = require('../models/snack')

module.exports = {
    index,
    new: newSnack,
    create,
    show,
    edit,
    update
}

function index(req, res) {
    Snack.find({}, function(err, snack) {
        console.log(snack)
        res.render('snacks/index', {snack})
    })
}

function newSnack(req, res) {
    res.render('snacks/new', { title: 'Add Snack' });
}

// function create(req, res) {
//     const snack = new Snack (req.body){
//         name: req.body.name,
//         kind: req.body.kind,
//         rating: req.body.rating
//     }
//     Snack.create(snack, function(err, snacks) {
//         if (err) {
//             return res.redirect('/snacks/new')
//         } 
//         else {
//             snacks.save();
//             res.redirect(`/snacks`)
//         }
//     })
// }

function create(req, res) {
    const snack = new Snack (req.body)
    snack.save(function(err) {
        if (err) {
            console.log(err)
            return res.render('snacks/new')
        } 
        else {
            res.redirect(`/snacks`)
        }
    })
}  

function show(req, res) {
    Snack.findById(req.params.id, function(err, snack) {
        console.log(snack)
        console.log(err)
        res.render('snacks/show', {snack})
    })
}

function edit(req, res) {
    const snack = {id: req.params.id}
    res.render('snacks/edit', {snack})
}

function update(req, res) {
    Snack.findOneAndUpdate({_id: req.params.id}, req.body, {new: true} , function(err, snack) {
        if (err)
        return res.redirect ('/snacks/edit')
        res.redirect(`/snacks/${snack._id}`)
    });
}