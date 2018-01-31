// **Instructions**

//   * In this activity, we are going to create a constructor function called "Programmer" which 
//can be used to create objects containing information on various programmers.

//   * Your "Programmer" constructor should be able to take in the following information...

//     * The programmer's name
//     * Their position/job title
//     * How old they are
//     * Favorite programming language

//   * Now create a method for the constructor that would print all of the information contained 
//within an object to the console.

//   * Finally, create a "Programmer" object and call the method to print its contents

function Programmer(name, profession, gender, age, language) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.language = language;
	this.printInfo = function(){
		console.log(this.name);
		console.log(this.profession);
		console.log(this.gender);
		console.log(this.age);
		console.log(this.language);

	}
}
var marie = new Programmer("Marie", "teacher", "girl", 37, "JavaScript");



marie.printInfo();

