/*
Write a function that can take an array of objects, and conditionally pluck out values, resulting in an array of those values. The function should be called like this:

const someArray = [
{age: 50, name: ‘Bob’, isFast: true},
{age: 12, name: ‘Suzie’, isFast: true},
{age: 55, name: ‘Ali’, isFast :false},
{age: 23, name: ‘Michelle’, isFast: false,},
{age: 32, name: ‘Farah’, isFast: true},
];

const conditionalFunction = // should be a function that expects each item in the list, and returns true or false depending on the age of the person being iterated over

const pluckString = // a string that represents the key to keep

conditionalPluck(someArray, keepCondition, pluckString);

The goal of this function should be that it is reusable for different conditional function checks:

1. If the user is less than 30, pluck off their name, should result in
[‘Suzie’, ‘Michelle’];

2. If the user is NOT fast, pluck off their name, should result in
[‘Ali’, ‘Michelle’];
*/

const someArray = [
  {age: 50, name: 'Bob', isFast: true},
  {age: 12, name: 'Suzie', isFast: true},
  {age: 55, name: 'Ali', isFast :false},
  {age: 23, name: 'Michelle', isFast: false,},
  {age: 32, name: 'Farah', isFast: true},
];

const conditionalPluck = (someArray, keepCondition, pluckString) => someArray
  .filter(item => keepCondition(item))
  .map(item => item[pluckString]);

const youngerThan30 = (person, maxAge = 29) => person.age <= maxAge;
const notFast = (person) => person.isFast === false;

console.log('youngerThan30', conditionalPluck(someArray, youngerThan30, 'name'));
console.log('notFast', conditionalPluck(someArray, notFast, 'name'));
