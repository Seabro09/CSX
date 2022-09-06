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
}
const group1 = new Group(); 
group1.add(1);
group1.add(1);
group1;

console.log(group1);