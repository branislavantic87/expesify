// 
// Object desctructuring
// 

// const person = {
//     name: 'Bane',
//     age: 30,
//     location: {
//         city: 'Cacak',
//         temp: 5
//     }
// };


// const { name: firstName = 'Anonymous', age } = person;


// console.log(`${firstName} is ${age}.`);

// const { city, temp: temprature } = person.location;

// if (city && temprature) {
//     console.log(`It's ${temprature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// //  Default Self-published

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); 

// 
// Array destructuring
// 

// const address = ['1299 s Juniper Street', 'Cacak', 'Srbija', '32000'];

// const [ , city, state = 'New'  ] = address;

// console.log(`You are in ${city} ${state}`);


const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75']

const [cofeeType, , mPrice] = item;

console.log(`A medium ${cofeeType} costs ${mPrice}`)




