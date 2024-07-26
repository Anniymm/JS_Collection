// 1
function greet(){
    let input = prompt('enter a name ');
    console.log(`hello, ${input}, nice to meet you!`)
}
greet()

// 2
function quantity(){
    let input = prompt('enter a word ');
    console.log(`${input} has ${input.length} characters`)
}
quantity()

// 3
function quotes(){
    let quote = prompt('what is a quote ');
    let author = prompt('who said that ');
    console.log(`${author} said, that "${quote}." `)
}
quotes()

// 4
function low(){
    let quote = prompt('what is a quote ');
    let lowered = quote.toLowerCase();
    console.log(lowered)
}
low()

// 5
let inputs = prompt('enter string ');
console.log(inputs.replace(/ /g, '...'))
// replace-shi space unda gadavce globalurad, replaceit marto
//ertxel anacvlebs. ise ARA rogorc PYTHON-shi da nu meshleba!

// 6
let k = prompt('enter string ');
function replacee(k){
    let result = k.replace(':)', '🙂');
    result = result.replace(':(', '🙁'); // aq, resultad sheinaxa da mere resulti unda chavareplaceo
    return result;
}
console.log(replacee(k))

// 7 araferi axali, amitom davtove.

// 8 
function level() {
    let levell;
    do {
        levell = Number(prompt('Enter a level:'));
        if (isNaN(levell)) {
            console.log('Please enter a valid number.');
        } else if (levell <= 0) {
            console.log('Please enter a positive number.');
        }
    } while (isNaN(levell) || levell <= 0); // || OR
    return levell;
}
let leveli = level();
// console.log(leveli)

function arrays(level){
    let array = [];
    for (let i=1; i<=level; i++){
        array.push(i);
    }
    return array; // ricxvebis  lists daabrunebs
} 
let returned_array = arrays(leveli);
// console.log(returned_array)

function getRandomElement(returned_array) {
    const randomIndex = Math.floor(Math.random() * returned_array.length);
    const randomElement = returned_array[randomIndex];
    return randomElement;
}
let number = getRandomElement(returned_array)
// console.log(number)

function user_input(number){
    let user;
    let guessCount = 0;
    do {
        user = Number(prompt('Enter a number:'));
        guessCount++;
        if (user > number) {
            console.log('Too high');
            
        } else if (user < number) {
            console.log('Too low');
        }
    } while (user !== number);
    return `Right! \nyou guessed in ${guessCount} attempt!`;
    
}
console.log(user_input(number))











// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Anniymm/javascript_Algouni.git
// git push -u origin main