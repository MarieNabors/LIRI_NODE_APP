require('.env').config();

var myKeys = require('./keys.js');

var Twitter = require('twitter');

var spotify = require('spotify');

var marieTweets = function(){


var spotify = new Spotify(myKeys.spotify);
var client = new Twitter(myKeys.twitter);
 
 
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

 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, 
	function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    console.log(data);
});

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
}
commandPasser(process.argv[2], process.argv[3]);
