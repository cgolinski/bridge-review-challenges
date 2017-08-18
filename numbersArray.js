/*
Write a function that takes an array of numbers, and groups them into an object that shows the count of each number - for example:

Const numbers = [4, 5, 6, 6, 4, 6, 3, 5];

Should, when given to the function output

{
  3: 1,
  4: 2,
  5: 2,
  6: 3
}

*/

const numbers = [4, 5, 6, 6, 4, 6, 3, 5];

const groupNumbers = (numbers) => {
  return numbers.reduce((acc, val) => {
    acc[val]
      ? acc[val] = acc[val] + 1
      : acc[val] = 1;

    return acc;
  }, {});
};

console.log(groupNumbers(numbers));