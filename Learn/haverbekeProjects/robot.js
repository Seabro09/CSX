let roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) { // declare a function with label buildGraph
  let graph = Object.create(null); // create an empty object (has no proto)
  function addEdge(from, to) { // declare a function with label addEdge
    if (graph[from] == null) { // if the key paired with from is null...
      graph[from] = [to]; // add the key value pair of the from pairing and an array with the two as the value to the key
    } else { // else.. 
      graph[from].push(to); // push the to into the already created array for that particular from pairing
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) { //for let each from, to pair of edges (roads array) 
    addEdge(from, to); // perform the function addEdge which either creates a new key with an array as the value that has the to string inside or if the key is already created, pushes the destination into the already created array as an element in the array.
    addEdge(to, from); // same but opposite. 
  }
  return graph; // once all of the edges (roads) array has been interated over, return the graph and place it inside roadGraph
}

let roadGraph = buildGraph(roads); // declare a variable roadGraph and set it equal to the evaluated result of calling the buildGraph function and passing in the array roads as an argument
roadGraph;

let VillageState = class VillageState { // create a local variable with label VillageState and set it equal to a class with name VillageState
  constructor(place, parcels) { // constructor function passing in place and parcels as paramenters
    this.place = place; // the place property of the new object will be equal to the value in the place parameter in local memory
    this.parcels = parcels; // the parcels property of the new object will be equal to the value in the parcels parameter in local memeory. 
  } // the new instances of this class will have a place and parcel property

  move(destination) { // move method within this class will pass in declaration as a parameter
    if (!roadGraph[this.place].includes(destination)) { // if the current place's array (post office, see below) doesn't include the destination (Alice's House) return old state because its not a valid move.
      return this;
    } else { // else.. 
      let parcels = this.parcels.map(p => { // let parcels be equal to funning the map function on the second paramenter pulled in through the constructor function
        if (p.place != this.place) return p; // within that second parameter, we have an object... if that place wihtin that object is not equal to this.place (which is is falsy because both are post office), return p (which is post office)
        return {place: destination, address: p.address}; // but since they are the same, take the destination (Alice's house),a nd place it in place as a value, then the address of the second parameter will be the address now
      }).filter(p => p.place != p.address); // filter it so that p.place is not equal to p.address
      return new VillageState(destination, parcels); // return out a new state with a new destination and new parcels
    }
  }
}

let first = new VillageState( 
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);

let next = first.move("Alice's House");

console.log(next.place);
first;

//// 


function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

var mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}