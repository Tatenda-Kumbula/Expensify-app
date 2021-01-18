 //const person = {
   //name: 'Tatenda',
   //age: 19,
   //location: {
   //city: 'Alberton',
   // temp: 28
   //}
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

 //const { city, temp: temperature } = person.location;
 //if (city && temperature) {
 //  console.log(`It's ${temperature} in ${city}.`);
//}

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//

// const address = ['8215 James Street', 'Alberton', 'Gauteng', '1426'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
