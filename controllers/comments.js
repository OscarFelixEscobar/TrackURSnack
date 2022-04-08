const Snack = require('../models/snack')

module.exports = {
    create
}

function create(req, res) {
    Snack.findById(req.params._id, function(err, snack) {
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      snack.comments.push(req.body);
      snack.save(function(err) {
        res.redirect(`/snacks/${snack._id}`);
      });
    });
  }