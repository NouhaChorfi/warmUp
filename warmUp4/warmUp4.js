// 1-Define a function called myTrueFun that returns true whenever its called.
<<<<<<< HEAD
function myTrueFun(){
=======
function myTrueFun() {
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
	return true;
}
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

<<<<<<< HEAD
	function typeFunc(value){
		if (typeof value==="string"){
			return myTrueFun();
		}
		else{
			return false;
		}

=======
function typeFunc(value) {
	if (typeof value === 'string') {
		return myTrueFun();
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
	}
	return false;

}
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
<<<<<<< HEAD
function checkNumber (number){
	var prime =[2,3,5,7];
	var nonPrime=[0,1,4,6,8,9]
	if(prime.includes(number)){
		return "This number is  PRIME"
	}
	else if(nonPrime.includes(number)){
		return "This number is not prime"
	}
	else if (number>=10 && (number%2===0 || number%3===0 || number%5===0 || number%7===0)){
		return "This number is not prime"
	} 
	else{
		return "This number is  PRIME!"
	}
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function checkValue(par1,par2){
	if (par1==par2){
		return myTrueFun();
	}
	else{
		return false;
=======
function prime(number) {
	if (typeof number !== 'number') {
		return "Please enter a number.";
	}
	else {
		if (number < 2) {
			return "Not a prime number.";
		}
		else if (number === 2) {
			return "2 is a prime number"
		}
		else {
			for (var i = 2; i < number; i++) {
				if (number % i === 0) {
					return "Not a prime number.";
				}
				else {
					return "Yey it is a prime number";
				}
			}
		}
	}
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function sameValue(num1, num2) {
	if ((typeof num1 !== 'number') || (typeof num1 !== 'number')) {
		return "Please enter two numbers.";
	}
	else {
		if (num1 === num2) {
			return myTrueFun();
		}
		return !(myTrueFun());
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
	}
}