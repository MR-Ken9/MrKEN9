  // bài 2. Sử dụng một mảng các đối tượng person(name, age) thành tổng hợp mảng các tên người.

//     Input: const person = [
//         { name: 'John', age: 24 },
//         { name: Pete, age: 25 },
//         { name: Mary', age: 28 }
// ]

// Output: ['John', 'Pete', 'Mary'].

const person = [
    { name: 'John', age: 24 },
    { name: 'Pete', age: 25 },
    { name: 'Mary', age: 28 }
]

let namePerson = person.map(function (e) {
    return e.name;
})

console.log(namePerson)