# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

There was a syntax error at the last closing curly bracket. There should be a semi-colon after that bracket and at the end of any return statement. ```};```.

Additionally, after checking a condition, we set ```currentStatus``` equal to ```let```. We don't want to do that. We want to set it to ```return``` to return a string. Ex. it should be: 
```return currentStatus = 'Everything is just fine';```

In order to have use ```return```, we should declare ```currentStatus``` first. That way we don't have to delcare it in the middle of our If/Else Statements.
### Question 2
The following code logs : ```Lebron James```. We are logging ```theGoat.name```, this accesses bestPlayer. We declared bestPlayer earlier. It was ```.name``` so it's accessing the object property name which is ```"Lebron James"```. It's not accessing "Micheal Jordan" becuase the variable is ```bestPlayer.name```. We want the ```theGoat``` accessing within the object.

So, we called ```theGoat``` which is ```bestPlayer``` inside the object ```bestPlayer```, we are accessing the ```.name``` property. which holds the string ```Lebron James```.
### Question 3
The code logs: 
```
Paul is the hardest working person in the room. Laisha is also the hardest working person in the room.
```

When a variable is declared outside of the function meaning in the ***global scope***, the variable can be accessed because the function can **see/read** variables in the inner/outer scope. Since it's in the outer scope the variable ***(can be read by both)***. 
We are able to access it's ```value``` since the variable is declared outside the function.

>We treat/read this as a normal function. Since in Javascript we always read the **inner scope** variables first. Inside the function we declared `Paul`. So we log the 1st statement with Paul. Then, we read the outerscope variables and integrate and print the results which we got `Laisha` and ***interpolate*** it into the string.

### Question 4
>- **Rest parameters** are used for when a function needs to accept any number of arguments ***presented as an array***. This allows us to write ***variadic functions*** meaning they are able to take in an indefinite number of arguments, perfect for a **specific** outcome of programming.


>- To turn a parameter into a rest parameter, you must: ***add 3 dots*** ```[...parameterName]```  in front of ***parameter name***.

Ex. ***Parameter:*** ```(num1, num2)```

Ex.***Rest Parameter:*** ```(...nums)``` - indicates multiple num arguments
When calling the function make sure to provide multiple arguments: ```console.log(functionName(1, 2, 3, 4, 5, 6, 7, 8,9));```

>- When calling the function we want to call the function as usual, but: we need multiple parameters. 

Typically, they hold any type of value: strings, numbers, objects, booleans, etc. It's also always an array of whatever type of data and can mix different ***data types***.

Ex. ```functionName([1, 2, 3 ,4, 5, 6], { name: "Tatiana" })```

- Here I will illustrate how to use ***rest parameters*** in a function called ```sum``` that takes any number of integers as arguments and returns their sum.

``` 
const sum = (...nums) => {
    for (let i = 0; i < nums.arr; i++) {
    return nums = sum;
  }
  return sum;
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
```
### Question 5
# What is Scope?
## A Definition of Scope:
A **Defintion** of **Scope** according to the **MDN Web Docs**: 

>The context in which "values" or "expressions" can be visible, sourced, or referenced.

MDN mentions that Javasscript has all types of scopes:
- *Global Scope:* The default scope for all code running in script mode.
- *Module Scope:* The scope for code running in module mode.
- *Function Scope:* The scope created automatically by creating a function.


A scope created by a function can only be accessed by that function. That variable defined in that specific function cannot be accessed from outside that function or within other functions.

> Mozilla Contributors. “Scope.” MDN Web Docs, Mozilla, https://developer.mozilla.org/en-US/docs/Glossary/Scope
. Accessed 22 Oct. 2025.

## My Definition of Scope:
***My Definition of Scope:*** How a certain variable or expression can be accessed. Depending if it's inside or outside a function determines how it can be accessed and used. 

- If it's inside a function: It can only be accessed by that specific function.

- If it's outside a function: It can be accessed by the whole file and functions, only as long as you can use the same variable name to ***reference*** it.

## An Analogy📸
>You can think of a scope like looking through a lens of a phone camera🤳     🌋.

The back facing camera can capture only part of the landscape in front of you not the whole landscape. Unless you alter a specific st of settings for it to zoom out and capture the whole thing.

**Example:**

- How **Local Scope** can only access the variables/expressions within that **specific function**. - The phone can only see what is in the *frame*.
 
- How **Global Scope** can access the whole file page and all of the functions only if you can use the same variable name to reference it. - The phone can capture the whole thing because it's visible everywhere.

A short code snippet that demonstrates scope:

```
let message = "Hello, My name is Tatiana"

const greeting = () => {
console.log(message);
}
greeting();
```
🔼What is happening in the code above🔼

This is a simple function named greeting that logs a `message` onto the screen. 

The variable is declared outside of the function. Meaning the whole file can access this variable name. It is considered a ***Global Scope.***

Remember **scope** is like a phone camera lens 🤳📸, it sources out what you can see and what you can see or access at any given time.

### Question 6
# What are Modules?
A **Module** in Javascript is a seperate file that conatains ***resusable*** code to acheive a smaller task until called into a bigger function. Modules break up code in smaller, usable, and more functional, modular parts. They are usually reusable. Modules need to be able to perform a single or related group of tasks. In Javascript we use a system called **CommonJS**


- The significance of creating modules is that it allows us to better structure and organise our codebase.

Instead of having random functions everywhere, making it hard to follow and keep track. You could make your coding experience more seamless by having your code set up to work in systems or parts that are broken down and more manageable. When you have small chuncks you can start them in the order you'd like chronologically. This makes it super easy to execute code faster. What makes modules great is the functionality and how versitile it can be. 

Note: Everything within a file is usually by default private, untill you explicitly export it, everything will remain private.

- We use `***import***` and `***export***` to share and receive functionalities across different modules.
- The `**export**` keyword is used to provide the access to the other modules. `**export**` is used to make a variable, function, class, or object. It becomes public code (the parts meant to be shared with or used by other modules).

The `**import**` keyword is used to bring in public code from another module.

Here is an example of how it's used:
```
const sayHello = (name) => {
  return `Hello, ${name}!`
}
console.log(sayHello("Tati"));



const addNumbers = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};
// can also write it like this: const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(2, 3));



const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false
  }
};
console.log(isEven(5));
console.log(isEven(2));

export { sayHello, addNumbers };
```
- We exported 2 out of the 3 files. You can see the `export` keyword with the object function names attached with what you want to make accessible. Once this happens functions can be accessed by any function in that codebase that needs them.

To import a functionality or quality that want to use from a different location, we just bring it in with an `import`: 
You can import from the same module or import from a different file: 

1) Write your function
2) Export it
3) Import it into another file
4) Use it

***Exporting a function:***
```
export const getExported = () => {
  console.log("Hello from myExport!");
};
```
***Importing an export:***
```
import { myExport } from "/modules/my-module.js";

myExport(); 
```


This is an example of `importing`. It's telling Javascript go to the file name `/modules/my-module.js` to find what was exported with `export` and bring it into this file so it can be used.

```
### Question 7


### Question 8

