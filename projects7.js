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
let names = ['ani', 'mariami', 'nika', 'giorgi', 'ani', 'mari'];
let counts = {};
names.forEach(function(name) {
    counts[name] = (counts[name] || 0) + 1;
});

console.log(counts);

// 11 ar vici es amas mekitxeba tu ara

function Product(){
    let product1 = {name: 'p1', price: 12};
    this.getPrice=function(){
        console.log(product1['price'])
    }
}
let product = new Product();
product.getPrice(); // es fasi rom dabewdos

let arr = [];
let sum = 0;

function Basket(name, price) {
    this.name = name;
    this.price = price;
    arr.push(this);
}

function calculateTotalPrice() {
    sum = arr.reduce((total, item) => total + item.price, 0);
    console.log('Total Price:', sum);
}

let item1 = new Basket('item1', 1.5);
let item2 = new Basket('item2', 1);
let item3 = new Basket('item3', 2.0);

calculateTotalPrice(); 

// 12 logika: jsodan vaqciot

obj1 = { a: 1, b: { c: 2 } } ;
obj2 = { a: 1, b: { c: 5 } };

function compare(obj1, obj2){
     return JSON.stringify(obj1) === JSON.stringify(obj2) 
}
console.log(compare(obj1, obj2));

// 13
let arr = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
function getArray(arr){
    let ids = [];
    for(let i=0; i<arr.length; i++){
        ids.push(arr[i].id)
        ids.push(arr[i].name)
    }
    return ids;
}

function convert(){
    let arrayy = getArray(arr);
    let obj = {};
    for (let i = 0; i < arrayy.length; i += 2) {
        obj[arrayy[i]] = arrayy[i + 1];
    }
    return obj;
}
console.log(convert());

// 14  unda davfiqrde. JSON.stringify aqcevs magram ""-eseni saidan gavachino ver mivxvdi )))

// 15 amasac vtoveb, mere minda rom vcado.
// p.s pasuxi arc ertze ar minda rasac vtoveb, logikas ver vxvdebi da minda rom vifiqro












