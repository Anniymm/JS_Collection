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


