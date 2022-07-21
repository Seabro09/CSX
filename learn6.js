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