var express = require('express');
var router = express.Router();
var movieJSON = require('../movies.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var movies = movieJSON.movies;
  res.render('index', { 
    title: 'Star Wars Movies',
    movies : movies 
  });
});


router.get('/star_wars_episode/:episode_number?', function(req,res){
  var episode_number = req.params.episode_number;

  var movies = movieJSON.movies;

  if(episode_number >= 1 && episode_number <=6){
    var movie = movies[episode_number - 1];

    var title = movie.title;
    var poster = movie.poster;
    var description = movie.description;
    var main_character = movie.main_characters;
    var hero_img_url = movie.hero_image;
    // console.log("poster:"+ poster)

    res.render('movie_single', {
      movies: movies,
      title: title,
      poster_url : poster,
      description : description,
      main_character : main_character,
      hero_img_url : hero_img_url
    });

  }else
  {
    res.render('error',{
      movies:movies,
      title:"404 - Page Not Found",
      error:"This is not the page you are looking for.."
    });
  } 

})


router.get('*',function(req,res){
  var movies = movieJSON.movies;
  res.render('error',{
    movies: movies,
    title:"404 - Page Not Found",
    error:"This is not the page you are looking for.."
  });
});

module.exports = router;
