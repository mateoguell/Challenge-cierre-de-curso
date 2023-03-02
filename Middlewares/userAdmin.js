const db = require('../database/models')
async function userAdmin(req, res, next) {
    if (req.session && req.session.authenticated) {
        const user = await db.User.findOne({name: 'admin'});
      return next();
    } else {
      res.redirect('/');
    }
  }
  
  module.exports = userAdmin;