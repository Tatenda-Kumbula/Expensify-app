import * as firebase from 'firebase';

const config = {
  
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Tatenda Kumbula'
});
firebase.initializeApp(config);

const database = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider(); 

export { firebase, database as default};

/* // child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_added
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  }); */

  
  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];
  
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  
  //     console.log(expenses);
  //   });
  
  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];
  
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  
  //   console.log(expenses);
  // });
  
  database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 976123498763
  });
  
  

/* database.ref().set({
  name: 'Tatenda Kumbula',
  age: 19,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    city: 'Johannesburg',
    country: 'South Africa'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amd',
    'location/city': 'Johannesburg'
  });
 */

// database.ref().set('This is my data.');
/* 
database.ref('age').set(19);
database.ref('location/city').set('Alberton'); */

/* database.ref('attributes').set({
  height: 73,
  weight: 55
}).then(() => {
    console.log('Second set call worked.');
  }).catch((e) => {
    console.log('Things didnt for the second error', e);
  });
  
 */

 // database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });