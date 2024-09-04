// 28
function checker(){
    let input = prompt('File name: ');
    if(input.endsWith('.jpg') || input.endsWith('.jpeg')){
        console.log('image/jpeg')
    }else if(input.endsWith('.gif')){
        console.log('image/gif');
    }else if(input.endsWith('.pdf')){
        console.log('doc.pdf');
    }else{
        console.log('application/octet-stream')
    }
}

checker();


// 29
function expression() {
    let exp = prompt('Expression: ');
    let arr = exp.split(' '); 
    return arr;
}

function Manage() {
    let array = expression(); 
    let num1 = parseInt(array[0]); 
    let operator = array[1]; 
    let num2 = parseInt(array[2]);  
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid number .";
    }
    // if elsebitac 
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Division by zero ";
            }
            break;
    }

    return result;
}

console.log(Manage());

// 30
function main() {
    let converted;
        while (true) {
        converted = convert();
        if (converted >= 7 && converted < 8) {
            console.log('Breakfast time');
            break; 
        } else if (converted >= 12 && converted < 13) {
            console.log('Lunch time');
            break; 
        } else if (converted >= 18 && converted < 19) {
            console.log('Dinner time');
            break; 
        } 
    }
}

function convert(){
    let time = prompt('What time is it? ');
    const [hours, minutes] = time.split(':').map(Number);
    const decimalTime = hours + (minutes / 60);
    return decimalTime;
}

main();

// 31
function numbers(){
    let arr = [];
    for(let i=0; i<5; i++){
        let num = Number(prompt('Enter a number '));
        arr.push(num);
    }
    let total = arr.reduce((a, b) => a + b, 0);
    console.log(`The total is ${total}.`)
}
numbers();

// 32 
function calculateTax() {
    let orderAmount = parseFloat(prompt("Enter the order amount: "));
    let state = prompt("Enter the state: ").toUpperCase();
    let tax = 0;
    let total = orderAmount;
    if (state === "WI") {
        tax = orderAmount * 0.055;  // 5.5% 
        total += tax;  
        console.log(`Subtotal: $${orderAmount.toFixed(2)}`);
        console.log(`Tax: $${tax.toFixed(2)}`);
    }
    console.log(`Total: $${total.toFixed(2)}`);
}

calculateTax();


// 33
function password(){
    let password = 'rame';
    let user_input = prompt('What is the password? ');
    if(password === user_input){
        console.log('Welcome!');
    }else{
        console.log('I don\'t know you!');
    }
}
password();

// 34
function ageChecker(){
    let age = Number(prompt('What is your age? '));
    if(age >= 16){
        console.log('You are old enough to legally drive.')
    }else if(age<16 && age>0){
        console.log('You are not old enough to legally drive.')
    }else{
        console.log('enter valid age')
    }
}
ageChecker()





