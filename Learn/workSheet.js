// filter

const boats = [
    {
        name: "DownTheBayou",
        weight: 3,
        length: 5,
    },
    {
        name: "OntheHighway",
        weight: 56,
        length: 27,
        
    },
    {
        name: "HeavyWinds",
        weight: 3,
        length: 5,
    },
    {
        name: "CalmSeas",
        weight: 39,
        length: 30,
        
    },
];

const filteredByWeight = boats.filter(weight => boats.weight > 3); 

console.log(filteredByWeight);
console.log(boats.filter(weight => boats.weight > 39));