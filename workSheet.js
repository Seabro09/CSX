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