require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./key");
var moment = require('moment');
var spotify = new Spotify(keys.spotify);
const axios = require('axios');
var fs = require("fs");

switch(process.argv[2]) {
case "concert-this":
    concertThis();
    break;

case "spotify-this-song":
    spotifyThis();
    break;

case "movie-this":
    movieThis();
    break;

case "do-what-it-says":
    doWhatItSays();
    break;
}

// Searches artist name in Bands in Town api
function concertThis(){
    //grab band to search
    var artistName = process.argv.slice(3).join(" ");
    console.log(artistName);
    var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
    //run the search
    axios.get(queryUrl)
    .then(function(response){
        //log the Artist, Venue, Date of event
        console.log("Artist: " + artistName);
        console.log("City: " + response.data[0].venue.city);
        console.log("Date: "+ moment(response.data[0].datetime).format("MM/DD/YYYY"));
    });
}

// Searches for songs on spotify
function spotifyThis(song){
    //grab song to search
    var songName = process.argv.slice(3).join(" ");
    console.log("Searched: " + songName);
    //run the search
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       //log Artist, Song Name, Preview Link, and Album the song is from
        console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Preview Link: " + data.tracks.items[0].preview_url);
      });
}

function movieThis(){
    //grab movie name
    var movieName = process.argv.slice(3).join(" ");
    console.log(movieName);
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=2b44ca8d";
    //run the search with default
    if (movieName === ""){
        axios.get("http://www.omdbapi.com/?t=Mr.+Nobody&apikey=2b44ca8d")
        .then(function(response){
            console.log("Title: " + response.data.Title);
            console.log("Release Date: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Freshness: " + response.data.Ratings[1].Value);
            console.log("Produced In: " + response.data.Country);
            console.log("Language(s): " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Title: " + response.data.Actors);
        })
    }else {
        axios.get(queryUrl)
        .then(function(response){
            console.log("Title: " + response.data.Title);
            console.log("Release Date: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Freshness: " + response.data.Ratings[1].Value);
            console.log("Produced In: " + response.data.Country);
            console.log("Language(s): " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Title: " + response.data.Actors);
        });
    }
}

