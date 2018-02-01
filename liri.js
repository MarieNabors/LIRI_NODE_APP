require('dotenv').config();

var myKeys = require('./keys.js');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

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
var queries = function(caseOne, functionOne){
	switch(caseOne){
		case "my-tweets" :
			marieTweets();
			break;
		case "spotify-this-song":
			searchSpotify(functionOne)
			break;
		default:
		console.log("LIRI doesn't know that.");


	}
}
var commandPasser = function(firstArgument,secondArgument){
	queries(firstArgument,secondArgument);
};

commandPasser(process.argv[2], process.argv[3]);
