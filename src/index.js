//global scope can see it throughout the whole file
const myOtherName = 'TT'
const myName = 'Tati';
console.log(myName);
if (myName) { //anything in the if statement can only be seen within the function
    const myName = 'Tatiana'
    console.log(myName);
}
const name = newName
console.log(myName);
console.log(myOtherName)


