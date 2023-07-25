let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);

const updateSortReverse = (arr,...letters) => arr = [...arr,...letters].sort().reverse();
let reverseSort = updateSortReverse(moreMixedLetters,'n','m','o');

console.log(mixedLetters);
console.log(reverseSort);
