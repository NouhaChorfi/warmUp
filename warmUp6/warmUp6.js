// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

<<<<<<< HEAD
function objKey ( obj ) {
    return Object.keys ( obj );
=======
function objKey(obj) {
  return Object.keys(obj);
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

<<<<<<< HEAD
function objLength ( obj ) {
    return ( Object.keys(obj) ).length
=======
function objLength(obj) {
  return Object.keys(obj).length;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

<<<<<<< HEAD


function objSort(obj) {
  var arrayBasedOnID = [];
  var smallID=obj[0].id
  for (var i=0 ; i<obj.length; i++){
    if (obj[i].id<smallID){
      arrayBasedOnID.push(obj[i])
    }
    
  }
  return arrayBasedOnID
}

=======
// function objSort(array) {
//   var arr = [];
//   for (var i = 0; i < array.length - 1; i++) {
//     if (Object.values(array[i])[0] <= Object.values(array[i + 1])[0]) {
//       arr[i] = array[i];
//     }
//     else {
//       arr[i] = array[i];
//     }
//   }
//   return arr;
// }
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
