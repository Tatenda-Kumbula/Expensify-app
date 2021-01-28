import * as firebase from 'firebase';

const config = {
  
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Tatenda Kumbula'
});
firebase.initializeApp(config);

const database = firebase.database();

/* database.ref().set({
  name: 'Tatenda Kumbula',
  age: 19,
  isSingle: false,
  location: {
    city: 'Alberton',
    country: 'South Africa'
}
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
}); */


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