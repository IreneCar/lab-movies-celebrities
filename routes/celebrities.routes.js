// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

//iteration #3 - Adding new Celebrities
router.get('/celebrities/create', (req, res, next) => {
  res.render('celebrities/new-celebrity.hbs');
});

router.post('/celebrities/create', (req, res, next) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(error => res.redirect('/celebrities/new-celebrity', error));
});

module.exports = router;