/*
Write a function that combines two arrays of strings, removing duplicates (case insensitive), and ordering the strings from smallest to biggest, ie:

[‘Hello’, ‘World’, ‘My’, ‘Name’, ‘world’, ‘Is’, ‘my’, ‘Hello’, ‘Della’];

Should result in this (or something of similar length ordering)

[‘Is’, ‘My’, ‘Name’, ‘Della’, ‘Hello’, ‘World’]

*/

const array1 = ['Hello', 'World', 'My', 'Name'];
const array2 = ['world', 'Is', 'my', 'Hello', 'Della'];

const combineArraysThenSort = (arr1, arr2) => []
  .concat(arr1, arr2)
  .map((str) => (str.toLowerCase()).charAt(0).toUpperCase() + str.slice(1))
  .filter((str, index, array) => array.indexOf(str) === index)
  .sort((a, b) => a.length - b.length);

console.log(combineArraysThenSort(array1, array2));

