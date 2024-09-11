// 49 regexebit, es cota sxvanairadac sheidzleba, if-elsebit
function vanity(){
    let input = prompt('Plate: ');
    if(input.length >= 2 && input.length <=6){
        const regex1 = /^[A-Z]{3}[1-9]{3}$/;
        const regex2 = /^[A-Z]{2}[1-9]{4}$/;
        const regex3 = /^[A-Z]{5}[1-9]{1}$/;
        const regex4 = /^[A-Z]{6}$/
        if(regex1.test(input) || regex2.test(input) || regex3.test(input) || regex4.test(input)){
            console.log('Valid')
        }else{
            console.log('Invalid')
        }
    }
}
vanity();

// 50
function isAlpha(str) {
    return /^[A-Za-z]+$/.test(str);
  }
  
  function Rate(){
      let rate;
      // let isalpha = isAlpha(rate);
      do{
          rate = prompt('What is the rate of return? ');
          if (rate == 0 || isAlpha(rate) || Number(rate) <= 0) {
        console.log("Sorry. That's not a valid input.");
      }
      }while(rate == 0 || isAlpha(rate) || Number(rate) <= 0);
      let years = 72 / Number(rate) 
      console.log(`It will take ${years.toFixed(1)} years to double your initial investment.`)
  }
  Rate();

  // 51
  function nested(){
    for(let i = 0; i <= 12; i++){
        for(let j = 0; j <= 12; j++){
            console.log(`${i} X ${j} = ${i*j}`)
        }
    }
}
nested();

// 52
function inputs(){
    let pulse = Number(prompt('Resting Pulse: '));
    let age = Number(prompt('Age: '));
    let array = [];
    for(let i = 55; i<=95; i+=5){
        array.push(i)
    }
    
    console.log('Intensity    | Target Heart Rate');
    console.log('-------------|-------------------');

  array.forEach(intensity => { // forEachit yvela elementze shesruldeba
    let target = (((220 - age) - pulse) * (intensity / 100)) + pulse;
    console.log(`${intensity}%       | ${Math.round(target)} bpm`);
  });
}

inputs();
    
// 53
function randomNumber(){
    let level = Number(prompt('Let"s play Guess the Number. Pick a difficulty level (1, 2, or 3): '));
    if(level === 1){
        let num1 = Math.floor(Math.random() * 11) ; // es 10mde
        return num1;
    }else if(level === 2){
        let num2 = Math.floor(Math.random() * 101) ; // es 100mde 
        return num2
    }else if(level === 3){
        let num2 = Math.floor(Math.random() * 1001) ; // es 100mde 
        return num2
    }
}

function guessing(){
    let random = randomNumber();
    let guess;
    let attempts = 0; 
    
    do {
        guess = Number(prompt("I have my number. What's your guess? "));
        attempts++; 
        if (guess > random) {
            console.log("Too high. Try again.");
        } else if (guess < random) {
            console.log("Too low. Try again.");
        } else if (guess === random) {
            console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
        } else {
            console.log("Please enter a number.");
        }

    } while (guess !== random); 
    
}

function main(){
    let gues = guessing();
    let again = prompt('Play again? ').toLowerCase();
    if(again === 'no' || again === 'n'){
        console.log('Goodbye')
    }else{
        gues;
    }
    
}
main()


// 54
// "Yes", "No" ან "Ask again later".
function asking(){
    let question = prompt('what\'s your question: ');
    let array = ["Yes", "No", "Ask again later"];
    let randomIndex = Math.floor(Math.random() * array.length); // JER INDEXI SHEARCHIOS RANDOMAD
    let randomElement = array[randomIndex]; // MERE AMOIGHOS ELEMENTI
    console.log(randomElement)
}
asking()




