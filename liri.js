require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./key");
var moment = require('moment');
var spotify = new Spotify(keys.spotify);

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
    var artist = process.argv.slice(3).join(" ");
    console.log(artist);
    //run the search

    //log the Artist, Venue, Date of event
    // console.log("Artist: " + );
    // console.log("Venue: " + );
    // console.log("Date: " + );
}

// Searches for songs on spotify
function spotifyThis(){
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
    //run the search

    //log return 'pretty'

    //give it a default if nothing entered

}

function doWhatItSays(){
    //run spotifyThis with information entered from random.txt
}