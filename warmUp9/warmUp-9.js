// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

<<<<<<< HEAD
var nameOfFemales = ["Nouha" , "Siwar"];
var nameOfMales=["Amine", "Firas","Ayman", "Khaireddine", "Motaz", "Amir" ,  "Wala" , "Ghazi", "Mohamed", "Ahmed", "omar"]
var nameOfInstractors= ["Walid", "Matt", "Cassels", "Seif"]

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

/* This function takes an array as parameter and return the elements in the middle (one element when the array's legth is odd
, and two elements when the length is even*/

function middleElementOfArray ( array ) {
    if ( array.length % 2 !== 0 )  {
        return "The Element in the middle is: " +array [ Math.floor(array.length/2)] ;
    }
    return "This array's length is even, it returns two elements in the middle : " + array [ (array.length / 2 ) - 1 ] + " and " + array [ ( array.length / 2 )  ];
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.

// This function is to multiply any number by 2
function double ( number ) {    
    return number * 2;
}

//this function is to iterate an array and multiply all the numbers in the even indexes by 2
function multipliedByTwo ( array ) {
    for ( var i=0 ; i<array.length ; i=i+2 ){
        array [ i ] = double ( array [ i ] );
    }
    return array;
}

=======
var arrayFemales = ['Siwar', 'Nouha'];
var arrayMales = ['Houss1', 'Houss2', 'Omar', 'Taha', '..........'];
var arrayInstructors = ['Matt', 'Cassels', 'Walid'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middleArray(array) {
    if (array.length % 2 !== 0) {
        return array[(Math.floor(array.length / 2))];
    }
    else {
        return "Enter an array with an odd length."
    }
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function doubledEvenIndexes(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            arr.push(array[i] * 2);
        }
    }
    return arr;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
