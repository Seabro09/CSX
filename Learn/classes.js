class Color { // the class is color
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} color says '${line}'`);
    }
}

let blackColor = new Color("black");

console.log(blackColor);

console.log(blackColor.type);

blackColor.speak("My color is black");

let blueColor = new Color("blue"); // This is a new object which was created as an instance of the Color class.

console.log(blueColor);

blueColor.speak("My color is blue");
