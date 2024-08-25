// 1
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let person =new Person('ani', 'maisuradze', '18');
console.log(person)

// 2
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.sayHello = function(){
        console.log(this.firstName);
    }
}
let person1 = new Person('anni', 'mm', 18);
person1.sayHello(); 

// 3
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
let person1 = new Person('anni', 'mm', 18);
delete person1.age;
console.log(person1)

// 4
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
let person1 = new Person('anni', 'mm', 18);
person1['job'] = 'student';
console.log(person1)


// 5
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    this.calculator = function(){
        console.log(this.job.length)
    }
}
let person1 = new Person('anni', 'mm', 18);
person1['job'] = 'student';
person1.calculator();

// 6
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
}
let person1 = new Person('anni', 'mm', 18);
const keysArray = Object.keys(person1);
const count = keysArray.length;
console.log(count)

// 7
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
}
let person1 = new Person('anni', 'mm', 18);
let check = person1.hasOwnProperty(Person, 'gender');
if(check){
    console.log('in object')
}else{
    console.log('not in object\n after add:')
    person1['gender'] = 'female';
    console.log(person1)
}


// 8
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
}
let person1 = new Person('anni', 'mm', 18);
for(let object in person1){
    console.log(object);
}

// 9
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let person1 = new Person('anni', 'mm', 18);
for(let object in person1){
    console.log(person1[object]);
}

// 10






