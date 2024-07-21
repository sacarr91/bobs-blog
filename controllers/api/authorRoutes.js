const router = require('express').Router();
const { Author } = require('../../models');


////// SIGN UP

router.post('/', async (req, res) => {
  try {
    const authorData = await Author.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, 
      loggedIn: true
    });

    req.session.save(() => {
      req.session.author_id = authorData.id;
      req.session.logged_in = authorData.loggedIn;

      res.status(200).json(authorData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


/////// LOG IN

router.post('/login', async (req, res) => {
  try {
    const authorData = await Author.findOne({ where: { email: req.body.email } });

    if (!authorData) {
      res
        .status(400)
        .json({ message: 'No such author in the database. Please sign up or try again.' });
      return;
    }

    const validPassword = authorData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again.' });
      return;
    }


    req.session.save(() => {
      req.session.author_id = authorData.id;
      req.session.logged_in = true;

      res.json({ author: authorData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', async (req, res) => {
  const authorData = await Author.findOne({ where: { id: req.session.author_id } });

  authorData.loggedIn = false;
  await authorData.save();

  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
