// Over the course of this activity you are going to be using constructors to create 
// simplistic characters for use within a very basic Roleplaying Game (RPG)

// Each character created using your constructor should have the following properties...

// Name: The character’s name --> String
function Character(name, profession, gender, age, strength, HP) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = age;
	this.HP = HP;
	this.printStats = function(){
		console.log(this.name);
		console.log(this.profession);
		console.log(this.gender);
		console.log(this.age);
		console.log(this.strength);
		console.log(this.HP);

	}
}
var character1 = new Character("Madison", "teacher", "girl", 30, 11, 30);

var character2 = new Character("Audrey", "teacher", "girl", 30, 11, 30);

character1.printStats();
character2.printStats();


// IsAlive: Function which prints whether or not this character is alive by
//  looking into their hitpoints and determining whether they are above or below zero.

// Attack: Function which takes in a second character’s hitpoints and subtracts this character’s strength from it.

// LevelUp: Function which increases this character’s Age by 1, their Strength by 5, and their HitPoints by 25.

// BONUS: After completing the previous sections and making sure they work,
//  you now have everything you need to create a very basic RPG where two characters
//   fight one another.
//  Don’t worry if you cannot finish this part of the activity as, 
//  by completing the above sections you are well on your way to mastering constructors!