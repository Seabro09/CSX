const person = {
    speak: function() {
        console.log(this.phrase);
    }
}

const graph = Object.create(person);
graph.phrase = "Hello, Paul";
graph;
//graph.speak();