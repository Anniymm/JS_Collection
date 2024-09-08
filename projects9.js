// 1
function getName(obj) {
    // The ternary operator (? :)  anu tu object name arsebobs daabrunos eg tuara daabrunos null
        return obj && obj.hasOwnProperty('name') ? obj.name : null;
    }
    
    console.log(getName({name:'ani',age:19}));
    console.log(getName({lname:'maisuradze',age:19}));

// 2
function getName(obj) {
    try {
        if (!obj || !obj.hasOwnProperty('name')) {
            throw new Error("does not have a 'name' property");
        }
        return obj.name; // else 
    } catch (error) {
        return " Error:", error.message;
    }
}

console.log(getName({ name: 'ani', age: 19 })); 
console.log(getName({ lname: 'maisuradze', age: 19 })); 



// 3
function division(x, y){
    try{
        if(isNaN(x) || isNaN(y)){
            throw new Error('not a number');
        }else if( y ===0){
            throw new Error('can not be 0')
        }
        let result = x/y;
        return result;
        
    }catch(error){
        return "Error: " + error.message;
    }
 }
 console.log(division('n', 3))
 console.log(division(1, 3))
 console.log(division(6, 0))

//  4
function promptAge(){
    try{
        let age = parseInt(prompt('Enter age: '));
        if(isNaN(age) || age <= 0){
            throw new Error('not a valid input');
        }return age;
    }catch(error){
        return error.message;
    }
}

function isAdult() {
    let age = promptAge();
    if (typeof age === 'number') {
        if (age < 18) {
            console.log('not srulwlovani');
        } else {
            console.log('srulWlovani ');
        }
    } else {
        console.log(age);  // es errors daakonsolebs 
    }
}

isAdult();

// 5
function jsonValidator(obj){
    try {
        const parsedObject = JSON.parse(obj);
        return parsedObject; 
    } catch (error) {
        // parsingis dros rac sheidzleba ro moxdes 
        console.log(error.message);
    }
}
const jsonString = '{"name": "aaaaaani", "age": 18}';
const jsonString2 = '{"name": "aaaaaani", "age"}';
console.log(jsonValidator(jsonString));
console.log(jsonValidator(jsonString2));

// 6
async function sendRequest(url) {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json(); 
        console.log("Response Data:", data); 
    } catch (error) {
        console.error("Error", error.message); 
    }
}
const url = 'https://api.github.com/users/temuritsutskiridze'; 
sendRequest(url);

