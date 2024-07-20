const router = require('express').Router();
const { User } = require('../../models');


////// SIGN UP

router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, 
      loggedIn: true
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = userData.loggedIn;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


/////// LOG IN

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'No such user in the database. Please sign up or try again.' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again.' });
      return;
    }


    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', async (req, res) => {
  const userData = await User.findOne({ where: { id: req.session.user_id } });

  userData.loggedIn = false;
  await userData.save();

  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
