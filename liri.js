require("dotenv").config();

var fs = require("fs");
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var keys = require('./keys.js');
var arg1 = process.argv[2];
var arg2 = process.argv[3];

var input = process.argv.slice(3).join(" ");

function movie(){
    var nodeArgs = process.argv;

    var movieName = "";

    for (var i = 3; i < nodeArgs.length; i++) {
        // console.log(movieName);
        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        } 
        else {movieName += nodeArgs[i];
        }       
    }
    if (arg2 === undefined){
        movieName = "Mr Nobody";
    } 
    // console.log(movieName);
    
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    request(queryURL, function(error, response, body) {

    if (!error && response.statusCode === 200) {

        title = "Title: " + JSON.parse(body).Title;
        year = "Release Year: " + JSON.parse(body).Year;
        rating = "IMDB Rating: " + JSON.parse(body).imdbRating;
        rotten = "Metascore: " + JSON.parse(body).Metascore;
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
    var client = new twitter(keys.twitter);
    var userId = {screen_name: 'Liri Boot', count: 20, result_type: 'recent'}

    client.get('statuses/user_timeline', userId, function(err, tweet, response) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }
        for (var i = 2; i < tweet.length; i++) {
            var results = tweet[i].text;
        }
    })
};

function spotify() {
    var spotify = new spotify(keys.spotify);
    if (input === '') {
        input = 'The Sign Ace of Base'
    }
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
    console.log(data); 
    })
    var song = data.tracks.items[0];
    var results = 'Artist: ' + song.artists[0].name + '\nSong: ' + song.name
    + '\nURL: ' + song.preview_url + '\nAlbum: ' + song.album.name + '\n';
    console.log(results);
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
    break;

    case 'my-tweets':
    // console.log("My Tweets");
    myTweets();
    break;

    case 'spotify-this-song':
    // console.log("Pick a song");
    spotify();
    break;
};

