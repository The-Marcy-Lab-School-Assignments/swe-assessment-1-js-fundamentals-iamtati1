/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================
const petJudger = (petBreed, petName) => {
  // check if one or both arguments are missing
  if (!petBreed || !petName) {
    console.log('Missing information. Please provide a valid pet.');
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`);
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`);
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`);
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`);
  } else {
    console.log('What an...interesting pet.');
  }
};

petJudger('dog', 'frida'); // Prints "I love dogs! frida is so cute!"
petJudger('panda', 'joe'); // Prints "What an...interesting pet."
petJudger('panda'); // Prints "Missing information. Please provide a valid pet."

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {

  if (firstNum >= secondNum) {
    return;
  }
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i);
  }
};

loopFromOneUpToAnother(1, 5); // Prints on separate lines 1 2 3 4
loopFromOneUpToAnother(5, 10); // Prints on separate lines 5 6 7 8 9
loopFromOneUpToAnother(1, 1); // Prints nothing
loopFromOneUpToAnother(5, 1); // Prints nothing

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  let arr;
  const newArray = [];
  for (let i = 0; i < str.length; i++) {
    newArray.push(arr[i])

  };
  return str[i];
};
/* Correct Examples: */
shoutEveryLetterForLoop('hey');
// H!
// E!
// Y!

shoutEveryLetterForLoop('');

/* Incorrect Examples: */
shoutEveryLetterForLoop('hey');
// HEY!

shoutEveryLetterForLoop('hey');
// H!E!Y!

// ============================================
// Question 4: letterCaseCounts
// ============================================

function letterCaseCounts(str) {
  if (Character.nums === isLower(str, []))
    return [] += 1;
}

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  // Your code here
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
