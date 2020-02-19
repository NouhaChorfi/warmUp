// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
<<<<<<< HEAD
var greatest=0;
function greastestCommonDivisor(number1, number2){
    
    if (number1%2===0 && number2%2===0){
        greastestCommonDivisor(number1/2, number2/2)       
        greatest=number1/2;
    }
    else if (number1%2===0){
        greastestCommonDivisor(number1/2, number2)
        greatest=number1/2;
    }
    else if (number2%2===0){
           greastestCommonDivisor(number1, number2/2)
           greatest=number1;
    }
    else if (number1>number2){
        greastestCommonDivisor((number1-number2)/2, number2)
        greatest=(number1-number2)/2;
    }
    else if (number1 <number2){
        greastestCommonDivisor(number1, (number2-number1)/2)
        greatest=number1;
    }    
    return greatest
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum (number1, number2){
    if (number2===0){
        return 1
    }     
        return number1+ sum(1, number2 -1);    
=======

function gcd(number1, number2) {
    if ((typeof number1 !== 'number') || (typeof number1 !== 'number') || (number1 < 0) || (number2 < 0)) {
        return "Please enter two positive numbers.";
    }
    else {
        if (number2 === 0) {
            return number1;
        }
        else {
            return gcd(number2, number1 % number2);
        }
    }
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without
// suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(number1, number2) {
    if (number2 !== 0) {
        return sum(number1 + 1, number2 - 1);
    }
    return number1;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}