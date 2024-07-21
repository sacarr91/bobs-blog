const session = require("express-session");

const withAuth = (req, res, next) => {
  // If the author is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    // res.redirect('/login');
    console.log('you are not logged in');
    console.log(`session.logged_in = ${session.logged_in}`)
    next();
  } else {
    console.log('you are logged in!');
    console.log(`session.logged_in = ${session.logged_in}`)
    next();
  }
};

module.exports = withAuth;