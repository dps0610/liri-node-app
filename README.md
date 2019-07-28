**LIRI** is a command line app that will take in commands from the user, and run a set of functions to provide information the user may find interesting. 

LIRI can take the following commands: 

1. `node liri.js concert-this <artist/band name here>`
  This will search the Bands in Town api for whomever you enter, and return:
    - Artist Name
    - City the Event Takes Place in
    - Date of the Event
    
    ![concert-this](https://user-images.githubusercontent.com/51932757/62002061-0463a680-b0cb-11e9-9ed0-eba3c6010f36.png)
    
2. `node liri.js spotify-this-song <song name here>`
  This will search the Spotify api for the song entered, and return: 
    - Artist Name
    - Song Name
    - The Album Name
    - A Preview Link
    
    ![spotify-this](https://user-images.githubusercontent.com/51932757/62002078-44c32480-b0cb-11e9-8097-89d2e4174ac3.png)
    
3. `node liri.js movie-this <movie name here>`
  This will search the OMDB api for the movie entered, and return: 
    - Title
    - Release Year
    - IMDB Rating
    - Rotten Tomatoes Freshness
    - Country it was Produced in
    - Languages 
    - Plot
    - Actors
    
    ![movie-this](https://user-images.githubusercontent.com/51932757/62002065-1d6c5780-b0cb-11e9-8f99-14549d386ee3.png)
    
    - If ther user does not enter a movie, a default of Mr. Nobody has been set. 
    
    ![Mr nobody](https://user-images.githubusercontent.com/51932757/62002074-3543db80-b0cb-11e9-84ec-d3d2dc2356cb.png)
