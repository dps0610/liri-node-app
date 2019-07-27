require("dotenv").config();

var keys = require("./keys.js");
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
    console.log("Artist: " + );
    console.log("Venue: " + );
    console.log("Date: " + );
}

// Searches for songs on spotify
function spotifyThis(){
    //grab song to search
    var songName = process.argv.slice(3).join(" ");
    console.log(songName);
    //run the search

    //log Artist, Song Name, Preview Link, and Album the song is from
    console.log("Artist: " + );
    console.log("Song: " + );
    console.log("Preview Link: " + ):
    console.log("Album: " + );
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