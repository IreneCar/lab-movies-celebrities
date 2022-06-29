const Movie = require("../models/Movie.model");
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

//iteration #6 - Adding new Movies
router.get('/movies/create', (req, res, next) => {
  res.render('movies/new-movie.hbs');
});

router.post('/movies/create', (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  console.log(req.body);
// 
  Movie.create({ title, genre, plot, cast })
    .then(() => res.redirect('/movies'))
    .catch(error => res.redirect('movies/new-movie.hbs', error));
});

//iteration #7 - Listing Our Movies
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((response) =>{
      console.log(response);
      res.render('movies/movies.hbs', {response});
    })
    .catch(error => next (error));
  
});


module.exports = router;