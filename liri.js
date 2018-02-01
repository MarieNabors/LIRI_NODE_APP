require('dotenv').config();

var myKeys = require('./keys.js');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var request = require('request');

var fs = require('fs');

var spotify = new Spotify(myKeys.spotify);

var client = new Twitter(myKeys.twitter);


var marieTweets = function(){
 
 
var params = {screen_name: 'TallahassiLassi'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error) {
	    console.log(tweets);

	    for(var i=0; i<20; i++){

	    	console.log(tweets[i].created_at);
	    	console.log(" ");
	    	console.log(tweets[i].text);
	    }
	}	
});
}

var searchSpotify = function(songTitle) {

		if (process.argv[3] == null) {
		var songTitle = "The Sign Ace of Base";
	}
 
spotify.search({ type: 'track', query: songTitle }, 
	function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 // create for loop to iterate through the items
 // print artist, song name, preview link, and album for each object to console
 // if no song, then default to "the sign" by ace of base
	
	if (data.tracks.items.length===0){
		spotify.search({ type: 'track', query: "The Sign" }, 
			function(err, theSignData) {
		    if ( err ) {
		        console.log('Error occurred: ' + err);
		        return;

		    }

 			console.log(theSignData)
 			console.log(theSignData.tracks.items[i].artists[0].name);
		 	console.log(theSignData.tracks.items[i].name);
		 	console.log(theSignData.tracks.items[i].preview_url);
		 	console.log(theSignData.tracks.items[i].album.name);
		 	console.log("--------------------------------")
		});
	}
 	else{ for(var i=0; i<10; i++){
		 	console.log(data.tracks.items[i].artists[0].name);
		 	console.log(data.tracks.items[i].name);
		 	console.log(data.tracks.items[i].preview_url);
		 	console.log(data.tracks.items[i].album.name);
		 	console.log("--------------------------------")
		 }
 }
   // console.log(data);
});
}
 var movies = function(filmTitle){

    if(process.argv[3] == null){
        filmTitle = "Mr. Nobody";
    }

    request('http://www.omdbapi.com/?t=' + filmTitle + '&y=&plot=short&r=json&apikey=40e9cece',
    function(error, response, body  ) {

    if(!error && response.statusCode === 200) {
        console.log("\n---------------------------------------------------\n")
        console.log("Film Title: " + JSON.parse(body).Title);
        console.log(" ");
        console.log("Year: " + JSON.parse(body).Year);
        console.log(" ");
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log(" ");
        console.log("Geographic Location: " + JSON.parse(body).Country);
        console.log(" ");
        console.log("Native Language: " + JSON.parse(body).Language);
        console.log(" ");
        console.log("Plot Summary: " + JSON.parse(body).Plot);
        console.log(" ");
        console.log("Cast: " + JSON.parse(body).Actors);
		console.log(" ");
        console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[1].Value);
 		console.log("\n---------------------------------------------------\n")
       
      }
    });

}

var randomText = function(){
	fs.readFile('random.txt', 'utf8', function (error, data) {
		if (!error) {
		        console.log("marieRocks");
		var newArray = data.split(",")
		if(newArray.length == 2){
			queries(newArray[0],newArray[1]);
		}

}
});
}
var queries = function(caseOne, functionOne){
	switch(caseOne){
		case "my-tweets" :
			marieTweets();
			break;
		case "spotify-this-song":
			searchSpotify(functionOne)
			break;
		case "do-what-it-says":
			randomText(functionOne);
			break;
			default:
			console.log("LIRI doesn't know that.");
		case "film-search" :
			movies(functionOne);

	}
}
var commandPasser = function(firstArgument,secondArgument){
	queries(firstArgument,secondArgument);
};

commandPasser(process.argv[2], process.argv[3]);
