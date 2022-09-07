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

//////////////////////

// Some more OOP and also using static 

class Group {
    constructor() {
        this.members = [];
    }
    add(value) {
        if (!this.members.includes(value)) {
          return this.members.push(value);   
        } else {
            console.log("This object already contains this value")
        }
    }
    delete(value) {
        if (this.members.includes(value)) {
            const index = this.members.indexOf(value);
            if (index > -1) {
                this.members.splice(index, 1);
            }
        } else {
            console.log(`That value is not present`)
        }
    }
    has(value) {
        if (this.members.includes(value)) {
            return true;
        }
    }
    static from(values) {
        let group = new Group;
        for (let value of values){
            group.add(value);
        }
        return group;
    }

}

const group1 = new Group(); 

group1.add(1);
group1.add(1);
group1.add(2);
group1.add(3);
group1.add(4);
group1.add(4);
group1.delete(1);
group1.delete(3);
console.log(group1.has(2));

const group2 =Group.from([10,20])
group2;