// how do you add to the start and end of an array?
var myArray = ['a','b','c','d'];

//function to add to end of array to add to beg do unshift
function addToArray(arr, ltr) {
    arr.push(ltr);
    return arr
}

console.log(addToArray(myArray, 'test'));

console.log(myArray.push('end'));
console.log(myArray.unshift('start'));
console.log(myArray);

//to do this in es6

myArray = ['start',...myArray,'end'];
console.log(myArray);

// how do you create a private variable in JS?

function secretVariable(){
    //limit var scope
    let private = "secret var";
    return function(){
        return private
    }
}
let getPrivateVariable = secretVariable();
console.log(getPrivateVariable());

//What is the output of this function?
//  let num = 4;
//  function outer(){
//      let num = 2;
//      function inner(){
//          num++;
//          let num = 3;
//          console.log(num);
//      }
//      inner();
//  }
//  outer();

 //it will return the number 3

//what is the output?

console.log(typeof typeof 1);
//do order of operations
// console.log(typeof (typeof 1));
//---> (typeof number)
//--> string

//What is the output?

let hero = {
    name: 'John  Doe',
    getSecretIdentity: function(){
        return this.name;
    }
};
let stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// undefined and John Doe if you add .bind then you get John Doe John Doe


// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array

function firstAndLast(input){
    let newArr = [];
    newArr.push(first(input));
    newArr.push(last(input));
    return newArr
}


// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together
function productOfAll(input){

    if (toString.call(input) !== "[object Array]")
        return false;

    let total   =   1;

    for(let i=0;i<input.length;i++){
        if(isNaN(input[i])){
            continue;
        }
        total   *=  Number(input[i]);
    }
    return total;
}