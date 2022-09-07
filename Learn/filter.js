// With an array

const weight = [180, 175, 165, 187, 190];

const filteredWeight = weight.filter(weight => weight >= 187);

console.log(filteredWeight);

// With an object

const users = [
    {id: 1, name: "Mike",  weight: 185},
    {id: 2, name: "Steve", weight: 197},
    {id: 3, name: "Alan",  weight: 167},
]

const filteredUsersWeight = users.filter(user => user.weight >= 185)

console.log(filteredUsersWeight);