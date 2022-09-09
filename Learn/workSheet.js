const user1 = {
    name: "Will",
    score: 3,
    increment: function() {
        user1.score++;
    }
};

user1.increment();

///

const user2 = {};

user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
    user2.score++
};

/// 

const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
    user3.score++;
}

/////

function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore); // creating a new empty object and store it in newUser with the bond. So we automatically have access to the two methods in userFunctionStore
    newUser.name = name;
    newUser.score = score;
    return newUser; // returns newUser out and stores it in user1 below
};

const userFunctionStore = {
    increment: function(){this.score++}, // remember, increment is a method
    login: function(){console.log("Logged in");}
};

const user1 = userCreator("Will", 3); // what ever is returned is stored in user1
const user2 = userCreator("Tim",  5); // will be undefined
user1.increment();

////

class UserCreator { // keyword class with UserCreator
    constructor (name, score) { // keyword constructor
        this.name = name;
        this.score = score;
    }
    increment () {
        this.score++;
    }
    login () {
        console.log("login");
    }
    decrement () {
        this.score-- 
    }
}

const user1 = new UserCreator("Eva", 9);

user1.increment();

const user2 = {};