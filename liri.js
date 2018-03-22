require("dotenv").config();

var fs = require("fs");
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var arg1 = process.argv[2];
var arg2 = process.argv[3];

function movie(){
    var nodeArgs = process.argv;

    var movieName = "";

    for (var i = 3; i < nodeArgs.length; i++) {
        console.log(movieName);
        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        } 
        else {movieName += nodeArgs[i];
        }       
    }
    if (arg2 === undefined){
        movieName = "Mr Nobody";
    } 
    console.log(movieName);
    
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    request(queryURL, function(error, response, body) {

    if (!error && response.statusCode === 200) {

        title = "Title: " + JSON.parse(body).Title;
        year = "Release Year: " + JSON.parse(body).Year;
        rating = "IMDB Rating: " + JSON.parse(body).imdbRating;
        lang = "Language: " + JSON.parse(body).Language;
        plot = "Plot: " + JSON.parse(body).Plot;
        actors = "Starring: " + JSON.parse(body).Actors;

        var film = [title, year, rating, lang, plot, actors];;

        for (var i = 0; i < film.length; i++) {
            console.log(film[i]);
        }
    };
    });
};
function myTweets() {

    var client = new twitter(keys.exports.twitter);
		 
    var twitterUsername = userINPUT;
    var text = "text";
    var params = {screen_name: twitterUsername, count: 20};
    if(!twitterUsername){
        twitterUsername = "boot_liri";
    }
    client.get('statuses/user_timeline', params, function(error, tweets, response) {    
        if (!error) 
        {console.log(error);
            console.log("Uh... Something's wrong:" + err)}  
    }
    )
};


function doWhat(){
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
  
        arg1 = dataArr[0];
        arg2 = dataArr[1];
 
        spotify(arg2);
    })
}; 

switch (arg1) {
    case 'do-what-it-says':
    doWhat();
    break;
    
    case 'movie-this':
    movie();
    break

    case 'my-tweets':
    myTweets();
    break
};

