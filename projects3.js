// 1
function loopebi(){
    for (let i=0; i<=10; i++){
        console.log(i); // tu aq return gamoviyeneb, mashin listshi unda shevinaxo da list davabruno
    }
}
loopebi()  



let i =0;
while(i<=10){
    console.log(i)
    i++;
}   


// 2

for (let i=0; i<=20; i+=2){
    console.log(i)
}


let i=0;
while(i<=20){
    console.log(i)
    i+=2;
}


// 3
let input = Number(prompt('inpit a number '));
function Counts(input){
    for(i=1;i<=input; i++){
        console.log('Hello!')
    }
}
Counts(input)

// ეს (დაბლა) ასე უნდა იყოს?
let input = Number(prompt('input a number '));
let i = '';

while(i<input){
    console.log('hello');
    i++;
}

//4
let sum = 0;
for (i=0; i<=100; i++){
    sum = sum + i;  //sum+=i;
}
console.log(sum)


// 5
let sum = 0;
for (i=1; i<=100; i+=2){
    sum = sum + i;
}
console.log(sum)   //es kenti da luwic ase oghond 0dan daiwyeba i


// 6
აქ გარეთაც მაქვს ფრომფთი და ფუნქციის შიგნითაც, ისე ვერ ვქენი რომ მხოლოდ შიგნით მქონდეს ან გარეთ, როგორც ვცადე არ გამოდის(არგუმენტებს ვერ ვათანხმებ მერე, ან უსასრულო ლუპს ვიღებ)..ოღონდ ამაზე პასუხი მარტო კი ან არა მითხარი, იზამს თუ არა...

let input = Number(prompt('Enter your expected number: '));
let random_Number = Math.floor(Math.random() * 101);
// console.log(random_Number);

function Checker(expected, randomNumber) {
    do {
        input = Number(prompt('Enter your guess (between 0 and 100): ')); 
        
    } while (input !== randomNumber); 

    console.log('You guessed');
}

Checker(input, random_Number);





