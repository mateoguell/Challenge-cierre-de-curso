function requireAuth(req, res, next) {
    if (req.session && req.session.authenticated) {
      return next();
    } else {
      res.redirect('/login');
    }
  }
  
  module.exports = requireAuth;