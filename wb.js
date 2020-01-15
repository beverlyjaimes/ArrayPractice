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
 let num = 4;
 function outer(){
     let num = 2;
     function inner(){
         num++;
         let num = 3;
         console.log(num);
     }
     inner();
 }
 outer();

 //it will return the number 3