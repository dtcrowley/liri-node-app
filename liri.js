require("dotenv").config();

var fs = require("fs");
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var arg1 = process.argv[2];
var arg2 = process.argv[3];

function movie(){
    var movieName;
    if (arg2 === undefined || arg2=== " "){
         movieName = "Mr Nobody";
    } 
     else {
        movieName = arg2
    }
    var movieName = movieName.split(" ").join("-");

    request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function(error, response, body) {


    if (!error && response.statusCode === 200) {

        title = "Title: " + JSON.parse(body).Title;
        year = "Release Year: " + JSON.parse(body).Year;
        rating = "IMDB Rating: " + JSON.parse(body).imdbRating;
        rToms = "Tomatometer: " + JSON.parse(body).Ratings[0].Value;
        lang = "Language: " + JSON.parse(body).Language;
        plot = "Plot: " + JSON.parse(body).Plot;
        actors = "Starring: " + JSON.parse(body).Actors;

        var film = [title, year, rating, rToms, lang, plot, actors];;

        for (var i = 0; i < film.length; i++) {
            console.log(film[i]);
        }
    };
    });
}




//the do-what-it-says command.
function doWhat(){
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
  
        arg1 = dataArr[0];
        arg2 = dataArr[1];
 
        spotify(arg2);
    }
)}; 

switch (arg1) {
    case 'do-what-it-says':
    doWhat();
    break;
    
    case 'movie-this':
    movie();
    break
   
}
// default:
// console.log("That's not enough! Add one of these commands: 'my-tweets', 'spotify-this-song', 'movie-this', or 'do-what-it-says.'"); 
// break;
// }
