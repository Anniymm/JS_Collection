// 1 
let y = prompt('input a number ');  
function Checker(x){
    if ( x % 2 === 0){    // === type da valuec rom toli iyos, anu numberzec rom shemowmdes 
        return 'is Even';
    }else{
        return 'is Odd';
    }
}
console.log(Checker(y))

//2
let y = prompt('input a number ');
function checker(x){
    if(x < 0 ){
        return 'negative'
    }else if(x > 0){   // else if igive elif pythonshi
        return 'positive'
    }else{
        return 'zero'
    }
}
console.log(checker(y))

// 3 mgoni es iyo piroba
let y = prompt('input a number ');
let i = prompt('input a 2nd number ');

function checker(y, i){
    if (y % i === 0 ){
        return 'hm'
    }else{
        return 'nw'
    }
}
console.log(checker(y, i))

// 4   an returnis nacvlad davaconsolelogo da mere marto gamovidzaxo functioni
let str = prompt('input string ');
function isEmpty(str){
    if(str.length === 0){
        return 'is empty'
    }else{
        return 'is not '
    }
}
console.log(isEmpty(str))

//5
let sentence = 'pirveli kosmosuri sichqare - 8 km/wm';
let inputi = prompt('enter a word ');
function inIt(x, y){
    if (y.includes(x)){
        return 'yes'
    }else{
        return 'no'
    }
}
console.log(inIt(inputi, sentence));

// 6
let inputi1 = prompt('enter a number ');
let inputi2 = prompt('enter a number ');
console.log(Math.max(inputi1,inputi2));

// 7
let inputi1 = prompt('enter a number ');
let inputi2 = prompt('enter a number ');
console.log(Math.min(inputi1,inputi2));

// 8
let inputi1 = prompt('enter your age ');
function age(x){
    if( x < 18 ){
        console.log('adult')  //an piriqit
    }else{
        console.log('Minor') 
    }
}
age(inputi1);

// 9  shekitxva: switch casebi xshirad gamoiyeneba?
let x = prompt('enter grade ')
// function checker(x){
//     if (x >= 91 && x < 101){ // && aris and 
//         return 'A'
//     }else if (x >= 81 && x < 91){
//         return 'B'
//     }  // da a.sh
// }
// console.log(checker(x));

// switch casebit 
function checker(grade) {
    let result;  // yovel jerze rom gaitoldes mere axaal mnishvnelonas 
    switch (true) {
        case (grade >= 91 && grade < 101):
            result = 'A'
            break;
        case (grade >= 81 && grade < 91):
            result = 'B'
            break;
    }
    return result;
}
console.log(checker(x)); 
}   

// 10
let x = prompt('enter string ').toUpperCase();
function checker(grade) {
    let result;   
    switch (grade) {
        case 'A':
            result = 'great'
            break;
        case ('B'):
            result = 'Good'
            break;
    }  // danarcheni logikebic ase 
    return result;   
}
console.log(checker(x)); 

// 11
let x = prompt('enter date ');
const dicti = {'january':31, 'february':28}; // da a.sh
const month = x.split(" ");
let word = month[1];
console.log(dicti[word]); //getic sheidzleba
