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

// 9 mgoni tan unda daetaval. demoshi cota sxvanairad iyo )
function promptLevel() {
    let level;
    while (true) {
        level = parseInt(prompt("Select a game level (1, 2, or 3):"), 10);
        if ([1, 2, 3].includes(level)) {
            return level;
        } else {
            alert("Invalid input. Please enter 1, 2, or 3.");
        }
    }
}

function generateProblem(level) {
    let x, y;
    if (level === 1) {
        x = Math.floor(Math.random() * 10) + 1;
        y = Math.floor(Math.random() * 10) + 1;
    } else if (level === 2) {
        x = Math.floor(Math.random() * 50) + 1;
        y = Math.floor(Math.random() * 50) + 1;
    } else if (level === 3) {
        x = Math.floor(Math.random() * 100) + 1;
        y = Math.floor(Math.random() * 100) + 1;
    }
    return { x, y, answer: x + y };
}

function main() {
    const level = promptLevel();
    let score = 0;
    const totalProblems = 10;

    for (let i = 0; i < totalProblems; i++) {
        const { x, y, answer } = generateProblem(level);
        let attempts = 0;
        let userAnswer;
        let correct = false;

        while (attempts < 3) {
            userAnswer = parseInt(prompt(`${x} + ${y} = `), 10);
            if (userAnswer === answer) {
                console.log('correct')
                score++;
                correct = true;
                break;
            } else {
                attempts++;
                if (attempts < 3) {
                    console.log("EEE");
                }
            }
        }
        if (!correct) {
            alert(`Answer ${answer}`);
        }
    }
    console.log(`Your score: ${score} out of ${totalProblems}`);
}
main();
