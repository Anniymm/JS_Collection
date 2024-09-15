// 57
function lengthi(){
    let length = Number(prompt('Whats the minimum length? '));
    return length;
}
function numbers(){
    let nums = Number(prompt('How many numbers? '));
    const numarr = ['1','0','2','3','4','5','6','7','8','9'];
    const shuffledArray = numarr.sort(() => 0.5 - Math.random());
    const randomElements = shuffledArray.slice(0, nums);
    return randomElements;
}

function characters(){
    let char = Number(prompt('How many special character? '));
    const special = ["!", "@", "#", "$", "%", "^", "&", "*"]
    const shuffledArray2 = special.sort(() => 0.5 - Math.random());
    const randomElements2 = shuffledArray2.slice(0, char);
    return randomElements2;
}
function alpha(){
    let Length = lengthi();
    let specials = characters();
    let numberss = numbers();
    let specialLengths = specials.length;
    let numberssLength = numberss.length;
    let alphebi = Length - (specialLengths + numberssLength); //aq davabruno ramdeni aso unda iyooooos
    if(alphebi < 0 ){
        console.log('something went wrong!Choose relevant lengths!') 
    }else{
        
        const alphebii = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const shuffledArray3 = alphebii.sort(() => 0.5 - Math.random());
        const randomElements3 = shuffledArray3.slice(0, alphebi);
        const combinedArray = specials.concat(numberss, randomElements3);

        const shuffledArraySum = combinedArray.sort(() => 0.5 - Math.random());
    
        console.log(`Your password is \n${shuffledArraySum.join('')}`);
        
    }
    
}
alpha()

// 58
function items(){
    const foodCalories = {
      apple: 95,
      banana: 105,
      chicken_breast: 165,
      potato: 163,
      chocolate: 210
    };
    let inputi = prompt('Item: ').toLowerCase();
    const keysArray = Object.keys(foodCalories);
    if (keysArray.includes(inputi)){
        console.log(`Calories: ${foodCalories[inputi]}`)
    }else{
        console.log('not in items')
    }
}
items()

// 59
function manageEmployees() {
    let employees = [
      'John Smith',
      'Jackie Jackson',
      'Chris Jones',
      'Amanda Cullen',
      'Jeremy Goodwin'
    ];
  
    
    console.log('There are ' + employees.length + ' employees:');
    employees.forEach(employee => console.log(employee));
  
    
    let employeeToRemove = prompt('Enter an employee name to remove:');
  
    
    const index = employees.indexOf(employeeToRemove); // indexis dabruneba
    if (index >= 0) {
      employees.splice(index, 1); //washla, indexidan marjvniv washalos 1 cali, anu eg erti magitom )))
    } else {
      console.log('Employee not found.');
    }
  
    
    console.log(`\nThere are ${employees.length} employees:`);
    employees.forEach(employee => console.log(employee));
  }
  
  manageEmployees();
  