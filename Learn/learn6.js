// Learning about OOP

//Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".


const personStore = {
  greet: function() {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
	const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore('Sandra', 26);

personStore.introduce = function() { // add the introduce method with dot notation
    console.log(`Hi, my name is ${this.name}`); // notice our use of this. Refers to the object that the method is connected to. "Left of the dot".
  }


//////////////////////////////////////////////////////////////

//Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
	const person = new PersonConstructor(); // new keyword allows for an object to be returned automatically and we also get the DUNDER Proto
  person.name = name;
  person.age = age;
  return person;
}     

const mike = personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs


//////////////////////////////////////////

//Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string "hello".

class PersonClass {
	constructor(name) {
    this.name = name;
	}
	greet () {
    console.log(`hello`);
  }
}

const george = new PersonClass('George');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'

///////////////////////////////////////////////////////////////

//Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string "Hello World, my name is [name]".

class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

class DeveloperClass extends PersonClass {
  introduce() {
    console.log(`Hello World, my name is ${this.name}`)
  }
}


const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'