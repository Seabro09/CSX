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
    static from(...values) {
        // figure out how static works
        // use a for/of loop to iterate over the object and get the values out
        // use the call method to put them into a newly created group.
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