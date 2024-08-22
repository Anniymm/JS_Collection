
//  11
function numbers(){
    let num1 = Number(prompt('first num'));
    let num2 = Number(prompt('second num'));
    let arr = [num1, num2];
    return arr;
}

function sum(arrays){
    return arrays[0] + arrays[1];
}

function dif(arrays){
    return arrays[0] - arrays[1];
}

function mult(arrays){
    return arrays[0] * arrays[1];
}

function div(arrays){
    return arrays[0] / arrays[1];
}  

function main() {
    let arrays = numbers();
    let total = sum(arrays);
    let diff = dif(arrays);
    let multt = mult(arrays);
    let divv = div(arrays);
    console.log(`${arrays[0]} + ${arrays[1]} = ${total}`);
    console.log(`${arrays[0]} - ${arrays[1]} = ${diff}`);
    console.log(`${arrays[0]} * ${arrays[1]} = ${multt}`);
    console.log(`${arrays[0]} / ${arrays[1]} = ${divv}`);
}
main();


// 12
function main() {
    const c = 300000000; 
    let user = Number(prompt('M: ')); 
    return [c, user];
}

function calculation(c, user){
    let e = c**2 * user; 
    console.log(`E: ${e}`);
}

function start(){
    let [c, user] = main(); 
    calculation(c, user); 
}
start();



// 13

 let dolar = meals[0];
    let rest = meals.slice(1);
    return Number(rest);
}

function percentage(){
    let perc = prompt('How many percent? ')
    let per = perc[perc.length - 1];
    let percc = perc.slice(0, -1);
    return (Number(percc) / 100);
}

function calculator(){
    let num1 = meal();
    let num2 = percentage();
    let leave = num1 * num2;
    return '$'+leave;
    
    
}
console.log(calculator());

// 16
function people(){
    let p = Number(prompt('how many people? '))
    return p;
}

function pizzas(){
    let z = Number(prompt('How many pizzas do you have? '))
    return z;
}
function slice(){
    let s = Number(prompt('How many slice? '))
    return s;
}
function divide(p, z, s){
    let total = z * s;
    let sliceForEach = Math.floor(total / p);
    let left = total % p;
    return [sliceForEach, left];
}

function main(){
    let pp = people();
    let zz = pizzas();
    let div = slice();
    let [slc, lft] = divide(pp,zz,div);
    console.log(`${pp} people with ${zz} pizzas`);
    console.log(`Each person gets ${slc} piece(s) of pizza.`);
    console.log(`There are ${lft} leftover piece(s).`);
}
main();

// 17
function list(){
    let products = [];  
    let product;  
    do {
        product = prompt('Enter a product ');
        if (product !== '-' && product !== '') { // eseni ro ar shevinaxo masivshi
            products.push(product);
        }
    } while(product !== '-');
    
    return products.sort();  
}

function countElements(array, elements) {
    let counts = {};
    for (let i = 0; i < array.length; i++) {
        if (elements.includes(array[i])) {
            if (!counts[array[i]]) {
                counts[array[i]] = 1;
            } else {
                counts[array[i]]++;
            }
        }
    }
    return counts;
}

function main(){
    let prod = list();
    let counts = countElements(prod, prod);
    for(let key in counts){
        console.log(`${counts[key]} ${key.toUpperCase()}`)

    }
}
main()

// 18
function name(){
    let names = [];  
    let namee;  
    do {
        namee = prompt('Name: ');
        if (namee !== '') {
            names.push(namee);
        }
    } while(namee !== '');
    
    return names;  
}

function checker(){
    let namebi = name();
    if(namebi.length === 1){
        console.log(`dieu, adieu, to ${namebi[0]}`);
    }else if(namebi.length === 2){
        console.log(`Adieu, adieu, to ${namebi[0]} and ${namebi[1]}`);
    }else if (namebi.length > 2) {
        let lastPerson = namebi.pop();
        console.log(`Adieu, adieu, to ${namebi.join(', ')}, and ${lastPerson}`);
    }
    
}
checker();