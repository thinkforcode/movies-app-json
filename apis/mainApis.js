
var moviesJson = require('../movies.json'); //import movies.json file

module.exports = function(app){
	var movies = moviesJson.movies;
    
     app.get('/home' , function(req,res){
     	res.render('home',{
     		title:"bollywood movies",
     		movies:movies

     	});
    });


     app.get('/movies_single/:episode_number?' , function(req,res){
     	var episode_number = req.params.episode_number;
     	res.send('This is the page for episode ' + episode_number);
     });


  app.get('/notfound' , function(req,res){
     	res.send('this is not the page you are looking for');
     });


}