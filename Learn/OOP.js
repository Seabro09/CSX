////////

class Student { //declare a class of label Student
    constructor(name, age) { // properties of class
        this.name = name;
        this.age = age;
    }
    increment(number) { // methods of class
        this.age += number;
        return this.age;
    }
}

let student1 = new Student("Mark Johnson", 12); // a new instance of class Student with the label of student passing in arguments. 

console.log(student1.name);
console.log(student1.age);

student1.increment(1);

console.log(student1.age);

student1.increment(2);

console.log(student1.age);

console.log(student1.increment(1)); // this works because within our increment method, we are returning this.age;

Student.prototype.grade = 4;


console.log(Student.protoype.grade);

////////////////////////////////////////////////////

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y)
    }
    timesTwo() {
        return new Vec(this.x * 2, this.y * 2);
    }
    timesOther(other) {
        return new Vec(this.x * other.x, this.y * other.y)
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}

console.log(new Vec(2,3).timesTwo());
console.log(new Vec(4,5).timesOther(new Vec(3,4)));
