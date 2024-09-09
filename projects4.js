// 1 
function sayHello(){
    console.log('Hello, World');
}
sayHello();

// 2
function greet(name){
    console.log(`hello ${name}`);
}
greet('X');

// 3

function sum(num1, num2){
    return num1 + num2);
}
console.log(sum(1, 2));

// 4
function calculateArea(width, length){
    return width*length;
}
console.log(calculateArea(60, 2));

//5 es gavige rogorc amixseni, dro rom aghar damekarga bevri droebit davtove 

// 7
function celsiusToFarenheit(celsius){
    let formula = (celsius * 9 / 5) +32;
    return formula;
}
console.log(celsiusToFarenheit(5));

// 6
function hello(quantity){
    for(let i=1; i<=quantity; i++){
        console.log('Hello, World')
    }
}
hello(5);


// 8
function sumDigit(number){
    let mynumber = number.toString();
    let sum=0;
    for(let digit of mynumber){
        sum = sum+parseInt(digit);
    }
    console.log(sum)
}
sumDigit(103);

// 9 indexebi shevinaxe masivshi a mere masivis sigrdze davitvale
     p.s amaze mokledac sheidzleba,magram irchevnia sxvadasxva metodebi vcado 

function countBs(string){
    let array = [];
    for(let i=0; i<string.length; i++){
        if(string[i] === 'B'){
            array.push(i);
        }
    }
    // console.log(array)
    console.log(array.length)
}
countBs('BaBBllBB0B')


// 10
function sum(a, b){
    let count = 0;
    for(let i=a; i<=b; i++){
        count+=i;
    }
    console.log(count)
}
sum(5,100)

//11
function palindrome(string){
    let array = string.split('');
    console.log(array)
    let reversedArray = string.split('').reverse();
    console.log(reversedArray)
    for (let i=0; i<string.length; i++){
        if (array[i] !== reversedArray[i]){
            return false;
        }
        
    }  
    return true;  
}
console.log(palindrome('amnna'));


