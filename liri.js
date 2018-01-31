require("dotenv").config();

var myKeys = require('./keys.js');

var Twitter = require('twitter');

var marieTweets = function(){

}
//var spotify = new Spotify(myKeys.spotify);
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
	} else {
		console.log(error);

	}

});

var doThis = function(caseData, functionData){
	switch(caseData){
		case 'my-tweets' :
		marieTweets();
		break;
		default: 
		console.log("LIRI doesn't know that.")

	}
}
var tryThis = function(ArgumentOne, ArgumentTwo)
	doThis(ArgumentOne, ArgumentTwo)

};

//make commands so liri can recognize them (step 10)

// if(process.argv[2]=="my-tweets"){
	
// }

// if(process.argv[2]=="spotify-this-song"){

// }

// if(process.argv[2]=="movie-this"){

// }

// if(process.argv[2]=="do-what-it-says"){

// }