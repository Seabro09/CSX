const user1= { 
    name: "Will",
    score: 3,
    increment: function() {
        user1.score++;
    }
};

const user2 = {}; // create an empty object



//assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
    user2.score++;
};


const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.incremenet = function() {
    user3.score++; 
};

function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++;
    }
    return newUser;
}

userCreator("Will", 3);
userCreator("Mike", 5);


/////////////////////////////////////////
function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment: function(){this.score++},
    login: function(){console.log("Logged in");}
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim",  5);
user1.increment();


/////////////////////////////////////

function UserCreator(name, score) { // notice the uppercase
    
}

UserCreator.prototype.increment = function(){
    this.score++;
};

UserCreator.prototype.login = function() {
    console.log("login");
}

const user1 = new UserCreator("Eva", 9)

user1.increment() 


/////////////////////////////////

class UserCreator {
    constructor (name,score) {
        this.name = name;
        this.score = score;
    }
    increment () {
        this.score++;
    }
    login () {
        console.log("login");
    }
}

const user1 = new UserCreator("Eva", 9);

user1.increment();