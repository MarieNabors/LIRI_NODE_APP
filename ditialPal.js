// Create a constructor called “DigitalPal” which will create four properties and four methods...
// The first property is “hungry” and it initially starts out as false
// The second property is “sleepy” and it initially starts out as false
// The third property is “bored” and it initially starts out as true
// The fourth property is “age” and it initially starts out at 0
function DigitalPal(hungry, sleepy, bored, age) {
	this.hungry = false
	this.sleepy = false
	this.bored = true
	this.age = 0
// The first method is “feed()” - If hungry is true, print “That was yummy!“,
	this.feed = function(){
		if(this.hungry===true){
			console.log("That was yummy!")

			// set hungry to false,
			// and then set sleepy to true. 
		 	this.hungry = false;
		 	this.sleepy = true;
		}	
			//If hungry is false, print “No thanks! I’m full.”
		else{
			console.log("No thanks; I'm full!")
		
		}
	}

	// The second method is “sleep()” - If sleepy is true, print “Zzzzzzzz”, 
	this.sleep = function(){

		if (this.sleepy === true) {
			console.log("Zzzzzzz")

			//set sleepy to false, 
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		}
		//then set bored to true, and then run increaseAge(). If sleepy is false, print “No way! I’m not tired.”
		else {
		 	this.sleepy = false;
			console.log("No way! I'm not tired.")
		}
	// The third method is “play()” - If bored is true, print “Yay! Let’s play!“,	
	
	this.play = function(){
		if(this.bored === true){
			console.log("Yay! Let's play!")
			//set bored to false, and then set hungry to true. 
			this.bored = false;
			this.hungry = true;
		}
		//If bored is false, print “Not right now. Later?”
		else {
			console.log("Not right now. Later?")
	
		}
	}
}
// The fourth method is “increaseAge()” - This method is called by the sleep() method when the
// DigitalPal goes to sleep and increases the DigitalPal’s age by one while also printing 
//“Happy Birthday to me! I am “+age+” old!”



// Create a variable named “dog” that is set to a new DigitalPal before 
//adding the following unique properties/methods to it...
// outside - Initially set to false
// bark() - Prints out “Woof! Woof!” when run
// goOutside() - If outside is false, prints “Yay! I love the outdoors!“, sets outside to true,
// and runs bark(). If outside is true, prints “We’re already outside though...”
// goInside() - If outside is true, prints “Do we have to? Fine...” and sets outside to false.
// If outside is false, prints “I’m already inside...”
// Make a second variable named “cat” that is set to a new DigitalPal and 
//add the following methods to it:
// houseCondition - Initially set to 100... But not for long...
// meow() - prints out “Meow! Meow!” when run
// destroyFurniture() - Decreases houseCondition by 10 and prints “MUAHAHAHAHA! TAKE THAT FURNITURE!” 
//to the screen. Also sets bored to false and sleepy to true. If houseCondition is equal to 0, 
//then this should not run anymore.
// buyNewFurniture() - Increases houseCondition by 50 and prints “Are you sure about that?” 
//to the screen.