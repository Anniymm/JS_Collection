// 19
function area(){
    let width = Number(prompt('width: '));
    let length = Number(prompt('length: '));
    return width * length;
}
function calculate(){
    let areas = area();
    return Math.ceil(areas / 350);
}
console.log(calculate())

// 20 aq ra unda, ratom ameorebs promptebs?
function item1(){
    let price1 = Number(prompt('Enter the price of item 1: '));
    let quantity1 = Number(prompt('Enter the quantity of item 1: '));
    return price1 * quantity1;
}

function item2(){
    let price2 = Number(prompt('Enter the price of item 2: '));
    let quantity2 = Number(prompt('Enter the quantity of item 2: '));
    return price2 * quantity2;
}

function item3(){
    let price3 = Number(prompt('Enter the price of item 3: '));
    let quantity3 = Number(prompt('Enter the quantity of item 3: '));
    return price3 * quantity3;
}

function Subtotal(){
    let Item1 = item1();
    let Item2 = item2();
    let Item3 = item3();
    return Item1 + Item2 + Item3; 
}

function Tax(){
    let subtotal = Subtotal();
    return subtotal * 0.055; // 5.5% tax
}

function total(){
    let subt = Subtotal();
    let tax = Tax();
    return subt + tax; 
}

function main(){
    let subt = Subtotal();
    let taxx = Tax();
    let Total = total();
    
    console.log(`Subtotal: $${subt.toFixed(2)}`);
    console.log(`Tax: $${taxx.toFixed(2)}`);
    console.log(`Total: $${Total.toFixed(2)}`);
}

main();


// 21
function euro(){
    let euros = Number(prompt('How many euros are you exchanging? '));
    return euros;
}

function exchangeRate(){
    let ex = Number(prompt('What is the exchange rate? '));
    return ex;
}
function exchangeRateDol(){
    let exc = Number(prompt('What is the exchange rate(dollar)? '));
    return exc;
}

function calculate(){
    let eu = euro();
    let exchange = exchangeRate();
    let dollar = exchangeRateDol();
    let amountTo = (eu * exchange) / dollar
    console.log(`${eu} euros at an exchange rate of ${exchange} is ${amountTo.toFixed(2)} U.S. dollars`)
}
calculate()

// 22 es gavige,magram davtove, principi igivea rac danarchenebshi

// 23 esec egre :)) funcqciebi, promptebi, calculate da formatirebuli stringi

// 24 
function def() {
    let question = prompt('What is the answer to the Great Question of Life, the Universe, and Everything? ').toLowerCase();
    let arr = ['42', 'forty-two', 'forty two'];
    let answer = arr.some(answer => question.includes(answer));
    if (answer) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
def();

// 25
function def() {
    let greet = prompt('greeting: ').toLowerCase();
    if(greet === 'hello'){
        console.log('$0')
    }else if(greet[0] === 'h' && greet !== 'hello'){
        console.log('$20');
    }else{
        console.log('$100')
    }
}
def();

// 26
function main() {
    const menu = {
        "baja taco": 4.25,
        "burrito": 7.50,
        "bowl": 8.50,
        "nachos": 11.00,
        "quesadilla": 8.50,
        "super burrito": 8.50,
        "super quesadilla": 9.50,
        "taco": 3.00,
        "tortilla salad": 8.00
    };

    let totalCost = 0.0;

    function handleInput() {
        let dish = prompt("Enter a dish: ").trim().toLowerCase();

        if (menu.hasOwnProperty(dish)) {
            totalCost += menu[dish];
            console.log(`Total: $${totalCost.toFixed(2)}`);
        } else if (dish) {
        }

        handleInput();
    }

    try {
        handleInput();
    } catch (e) { //es ar vici ase izavs tu ara ver vtestav
        console.log(`\nTotal: $${totalCost.toFixed(2)}`);
    }
}

main();


// 27
function emojiize() {
    const emojis = {
        ":thumbsup:": "👍",
        ":smile:": "😄",
        ":heart:": "❤️",
        ":star:": "⭐",
        ":car:": "🚗",
        ":dog:": "🐶",
    };

    let input = prompt("Enter a string to emojiize: ");

    for (let [alias, emoji] of Object.entries(emojis)) { // entries daabrunebs key-valueebs array-d
        input = input.split(alias).join(emoji);
    }
    console.log(input);
}

emojiize();


