//1
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(x=> x % 2 === 0);
console.log(evens)

// 2
const users = [
    { name: 'Ann', age: 17 },
    { name: 'Bob', age: 22 },
    { name: 'Mm', age: 19 },
    { name: 'David', age: 15 },
    { name: 'Nick', age: 30 }
];

const ages = users.filter(x => x.age >18);
console.log(ages)


// 3
const arr = ['stringi', 'ramestingi', 'kidevrame', 'sjddgfsjh', 'gg'];
const filtered = arr.filter(x => x.length >5);
console.log(filtered)

// 4
//sheidzleba forEachit a mapit.
//forEach axal masivs ar abrunebs amittom ase iqneba 

const numbers = [1, 2, 3];
numbers.forEach(x => console.log(x * 2));


const arr = [1, 2, 3, 4, 67];
const arr2 = arr.map(x => x * 2); // es axal masivs qmnis chveulebrivad
console.log(arr2);

//5
const users = [
    { name: 'Ann', age: 17 },
    { name: 'Bob', age: 22 },
    { name: 'Mm', age: 19 },
    { name: 'David', age: 15 },
    { name: 'Nick', age: 30 }
];

const names = users.map(user => user.name)
console.log(names)

//6
const arr = ['stringi', 'ramestingi', 'kidevrame', 'sjddgfsjh', 'gg'];
const filtered = arr.map(x => x.toUpperCase());
console.log(filtered)

// 7
const numbers = [1, 2, 3, 4, 67];
const sum = numbers.reduce((x, y) => x + y, 0);
console.log(sum); 
 
// 8
const names = ['ammy', 'nika', 'giorgi', 'ammy', 'nika'];
function countElements(array, elements) {
    let counts = {};
    for (let i = 0; i < array.length; i++) {
        if (elements.includes(array[i])) {
            if (!counts[array[i]]) {
                counts[array[i]] = 1;
            } else {
                counts[array[i]]++;
            }
        }
    }
    return counts;
}
console.log(countElements(names, names));

// 9
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// 10
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => b - a);
console.log(numbers);

// 11
const names = ['ammy', 'nika', 'giorgi', 'ammy', 'nika'];
console.log(names.sort()); //es ascending

const names = ['ammy', 'nika', 'giorgi', 'ammy', 'nika'];
console.log(names.sort().reverse()) // es not ascending

// 12
const names = ['ammy', 'nika','ann', 'giorgi', 'ammy', 'nika'];
const n = names.sort((a, b) => a.length - b.length);
console.log(n)

// 13
const names = ['ammy', 'nika','ann', 'giorgi', 'ammy', 'nika'];
names.forEach(function(name) {
    console.log(name);
});

// 14

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(function(number) {
    sum += number;
});
console.log(sum); 

// 15
const numbers = [32, 33, 16, 40];
function checkNumber(number) {
  return number > 0;
}
console.log(numbers.every(checkNumber));


const numbers = [32, 33, 16, 40];
function checkNumber(number) {
  return number > 0;
}
console.log(numbers.some(checkNumber));


// 16

const users = [
    { name: 'Ann', age: 121 },
    { name: 'Bob', age: 22 },
    { name: 'Mm', age: 19 },
    { name: 'David', age: 177 },
    { name: 'Nick', age: 30 }
];
const names = users.map(user => user.age)
function checkNumber(names){
    return names > 18;
    
}
console.log(names.every(checkNumber));

// 17
const names = ['ammy', 'nika', 'ann', 'giorgi', 'ammy', 'nika'];
function checkLengthi(name) {
    return name.length > 0; 
}
console.log(names.every(checkLengthi)); 

// 18
const numbers = [32, 30, 16, 40];
function checkNumber(number) {
    return number % 2 !== 0; 
}
console.log(numbers.some(checkNumber)); 

// 19
const users = [
    { name: 'Ann', age: 121 },
    { name: 'Bob', age: 22 },
    { name: 'Mm', age: 19 },
    { name: 'David', age: 177 },
    { name: 'Nick', age: 30 }
];
const names = users.map(user => user.age)
function checkNumber(names){
    return names < 18;
    
}
console.log(names.some(checkNumber));

// 20
function capitalizeWords(){
    let input = prompt('input a sentence: ');
    const words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1); //words[i].substr(1) sityvis danarcheninnawili rom patara darches 
    }
    return words.join(" ");
}
console.log(capitalizeWords());

// 21
// aq mgoni ase Iyo piroba 
const users = [
    { name: 'Ann', age: 121 },
    { name: 'Bob', age: 22 },
    { name: 'Mm', age: 19 },
    { name: 'David', age: 177 },
    { name: 'Nick', age: 30 }
];
const ages = users.map(user => user.age)
const names = users.map(user => user.name)

function save(name){
    return name;
}

function saves(age){
    return age;
}
console.log(save(names));
console.log(saves(ages));

// 22
function isPangram() {
    let input = prompt('Input a sentence: ').toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uniqueLetters = new Set(); // ertxel sheinaxos yvela aso da ramdenjerme ar
    for (let i = 0; i < input.length; i++) {
        let char = input[i]; // amovigho characterebi
        if (alphabet.includes(char)) {
            uniqueLetters.add(char); //daatatos setshi
        }
    }
    return uniqueLetters.size === 26;
}

console.log(isPangram());


// 23
// amaze cota unda davfiqrde

// 24 es ar vici amas mekitxeba tu ara

function removeFalseValues(arr) {
    return arr.filter(Boolean);
}
const originalArray = [0, 1, false, 2, '', 3, null, 4, 6];
const cleanedArray = removeFalseValues(originalArray);
console.log(cleanedArray); 


// 25
function Reverse(){
    let sentence = prompt('sentence: ');
    let arr = sentence.split(' ');
    let newArr = arr.reverse();
    let newString = newArr.join(' ');
    console.log(newString)
}
Reverse();









