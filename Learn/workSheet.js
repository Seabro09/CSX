const obj1 = {
    "Alice's House": ["Bob's House", "Cabin", "Post Office"],
    "Bob's House": ["Alice's House", "Town Hall"]  
}

///////////////////

const wrongMap = new Map();
wrongMap['bla'] = ['blaa'];
wrongMap['bla2'] = 'blaaa2';
wrongMap['bla'].push['mah']; // doesn't work

console.log(wrongMap);
wrongMap;

/////////////////

const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
