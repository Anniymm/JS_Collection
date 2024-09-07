// 35
function inputebi() {
    let A = Number(prompt('Alcohol consumed (in ounces): '));
    while (isNaN(A) || A <= 0) {
        A = Number(prompt('Alcohol consumed (in ounces): '));
    }

    let W = Number(prompt('Weight (in pounds): '));
    while (isNaN(W) || W <= 0) {
        W = Number(prompt('Weight (in pounds): '));
    }

    let G = prompt('Gender (Male or Female): ').toLowerCase();
    while (G !== 'male' && G !== 'female') {
        G = prompt('Gender (Male or Female): ').toLowerCase();
    }

    let H = Number(prompt('Hours since drinking: '));
    while (isNaN(H) || H < 0) {
        H = Number(prompt('Hours since drinking: '));
    }

    if (G === 'male') {
        return ((A * 5.14 / (W * 0.73)) - (0.15 * H));
    } else {
        return ((A * 5.14 / (W * 0.66)) - (0.15 * H));
    }
}

console.log(inputebi());

//36
function inputebi() {
    console.log('Press C to convert from Fahrenheit to Celsius.\nPress F to convert from Celsius to Fahrenheit.');
    let choice = prompt('Enter your choice: ').toUpperCase();
    if (choice === 'C') {
        let F = Number(prompt('Please enter the temperature in Fahrenheit: '));
        if (!isNaN(F)) {
            let result = (F - 32) * 5 / 9;
            console.log(`The temperature in Celsius is ${result.toFixed(2)}°C`);
        } else {
            console.log('Invalid input.');
        }
    } else if (choice === 'F') {
        let C = Number(prompt('Please enter the temperature in Celsius: '));
        if (!isNaN(C)) {
            let result2 = (C * 9 / 5) + 32;
            console.log(`The temperature in Fahrenheit is ${result2.toFixed(2)}°F`);
        } else {
            console.log('Invalid input.');
        }
    } else {
        console.log('Please enter "C" or "F".');
    }
}

inputebi();

// 37
function calculateBMI() {
    let weight = Number(prompt('Please enter your weight in pounds: '));
    while (isNaN(weight) || weight <= 0) {
        console.log('Invalid input.Try again!');
        weight = Number(prompt('Please enter your weight in pounds: '));
    }
    let height = Number(prompt('Please enter your height in inches: '));
    while (isNaN(height) || height <= 0) {
        console.log('Invalid input.');
        height = Number(prompt('Please enter your height in inches: '));
    }
    let bmi = (weight / (height * height)) * 703;
    console.log(`Your BMI is ${bmi.toFixed(2)}`);
    if (bmi >= 18.5 && bmi <= 25) {
        console.log('Your weight is normal.');
    } else if (bmi < 18.5) {
        console.log('You are underweight. ');
    } else {
        console.log('You are overweight. ');
    }
}

calculateBMI();

// 38
function taxCalculator() {
    let orderAmount = Number(prompt("order amount: "));
    while (isNaN(orderAmount) || orderAmount <= 0) {
        console.log("Invalid input");
        orderAmount = Number(prompt("Enter the order amount: "));
    }
    let state = prompt("Enter the state : ").toUpperCase();
    let tax = 0;
    if (state === "WI") {
        tax = orderAmount * 0.05;

        let county = prompt("Enter the county: ").toLowerCase();

        if (county === "eau claire") {
        } else if (county === "dunn") {
        }

    } else if (state === "IL") {
        tax = orderAmount * 0.08;
    } else {
        tax = 0;
    }
    let total = orderAmount + tax;

    if (tax > 0) {
        console.log(`The tax is $${tax.toFixed(2)}.`);
    }
    console.log(`The total is $${total.toFixed(2)}.`);
}

taxCalculator();

// 39 if ellsebit an switch-caasebitaac sheidzleba , mara es jobia )))
function getMonth() {
    let monthNumber = Number(prompt("Enter a number: "));
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) { // validacia da range  
        console.log("Error: Please enter a number between 1 and 12.");
    } else {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let monthName = months[monthNumber - 1];  // 0 indexidan iwyeba da -1 gvinda
        console.log(`Number ${monthNumber} is ${monthName}.`);
    }
}
getMonth();

// 40
function findLargestNumber() {
    let num1 = Number(prompt("Enter the first number: "));
    let num2 = Number(prompt("Enter the second number: "));
    let num3 = Number(prompt("Enter the third number: "));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Please enter valid numbers.");
        return;
    }

    if (num1 === num2 || num1 === num3 || num2 === num3) {
        console.log("Error: All numbers must be different.");
        return;
    }
    let largest = num1; // an ravi sxva romelimes gavutolot

    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }

    console.log(`The largest number is: ${largest}`);
}

findLargestNumber();

// 41 es cota me var da bevri gpt :))
function carTroubleshooter() {
    let answer = prompt("Is the car silent when you turn the key? (yes/no)").toLowerCase();

    if (answer === "yes") {
        answer = prompt("Are the battery terminals corroded? (yes/no)").toLowerCase();
        if (answer === "yes") {
            console.log("Clean terminals and try starting again.");
        } else {
            console.log("Replace cables and try again.");
        }
    } else {
        answer = prompt("Does the car make a clicking noise? (yes/no)").toLowerCase();
        if (answer === "yes") {
            console.log("Replace the battery.");
        } else {
            answer = prompt("Does the car crank up but fail to start? (yes/no)").toLowerCase();
            if (answer === "yes") {
                console.log("Check spark plug connections.");
            } else {
                answer = prompt("Does the engine start and then die? (yes/no)").toLowerCase();
                if (answer === "yes") {
                    answer = prompt("Does your car have fuel injection? (yes/no)").toLowerCase();
                    if (answer === "yes") {
                        console.log("Get it in for service.");
                    } else {
                        console.log("Check to ensure the choke is opening and closing.");
                    }
                } else {
                    console.log("This car appears to be in fine working order.");
                }
            }
        }
    }
}

carTroubleshooter();




