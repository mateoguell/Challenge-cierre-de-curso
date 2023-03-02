async function userAdmin(req, res, next) {
    if (req.session && req.session.authenticated) {
        const user = await db.User.FindOne({name: 'admin'});
        if (user && req.session.user.id === user.id){
      return next();
    }
    } else {
      res.redirect('/');
    }
  }
  
  module.exports = userAdmin;