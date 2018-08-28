console.log('Hello World');

const imastring = 'hi';

// IF ELSE STATEMENTS

const age = 99;
if (age < 21) {
    console.log('Maybe next time');
} else {
    console.log('party');
}

if (age >= 21) {
    console.log('call an uber');
} else {
    console.log('bring your fake ID next time');
}

// OPERATORS 

const a = 1;
const b = '1';

// a === b // fasle 
// a == b // true 

// a !== b // true 
// a != b // fasle 

// !authenticated = not true shorthand 

const favoriteColor = 'blue';
const favoriteAnimal = 'bear'; 

if (favoriteAnimal === 'bear' && favoriteColor === 'blue') {
    console.log('Welcome to the Club');
} else if (favoriteAnimal === 'cat' || favoriteColor === 'red') {
    console.log('$500 to join the club');
} else {
    console.log('go away');
}


const hiDiv = document.getElementById('hi');
console.log(hiDiv);

const pie = 'peach';
console.log('pie length: ', pie.length); // 5
console.log('#3', pie.charAt(2)); // a 
console.log('indexof cat', pie.indexOf('cat')); // -1 
console.log('indexof pea', pie.indexOf('pea')); // 0


const quote = 'winter is coming'; 
const newQuote = quote.replace(/is/g, "ain't");
console.log('newQuote', newQuote);


