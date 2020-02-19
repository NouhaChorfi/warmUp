// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h" "o1l2l3e4h"

function reverseStr ( string ) {

    var reversedString = '';
    var index = 1
    for ( var i = (string.length-1) ; i>=0 ; i-- ){
        if (index < string.length){
            reversedString=reversedString.concat ( string[ i ] + index );
        }
        else {
            reversedString=reversedString.concat ( string[ i ] );
        }

        index = index + 1;
    }
    return reversedString;
}

function reverseStr(string) {
    var str = "";
    var i = 1;

    while (i <= string.length + 1) {
        str = str + string.slice(string.length - 1) + i;
        string = string.slice(0, string.length - 1);
        i++;
    }
    return str;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

<<<<<<< HEAD
function stringLength ( array ) {
   
    var newArray=[];
    var comparingElement="";

    for ( var i=0 ; i<array.length ; i++){
        comparingElement=array[i]
        for (var j=i+1; j<array.length; j++){            
            if (comparingElement.length===array[j].length){
                newArray.push(array[i],array[j]);
                array.splice(j,1);
                array.splice(i,1);  
              
            }
        }        

    }
    return newArray;
=======
function sameLength(arrayOfStrings) {
    var arraySameLength = [];

    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length === arrayOfStrings[i + 1].length) {
            arraySameLength.push(arrayOfStrings[i], arrayOfStrings[i + 1]);
        }
    }
    return arraySameLength;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}