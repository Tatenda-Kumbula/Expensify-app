 const person = {
   name: 'Tatenda',
   age: 19,
   location: {
   city: 'Alberton',
    temp: 28
   }
 };

 const { name: firstName = 'Anonymous', age } = person;
 console.log(`${firstName} is ${age}.`);

 const { city, temp: temperature } = person.location;
 if (city && temperature) {
   console.log(`It's ${temperature} in ${city}.`);
}
