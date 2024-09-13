// 1
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayhello(){
        console.log('hello');
    }
}
let person1 = new Person('ani', 18);
console.log(person1)
console.log(person1.name)
console.log(person1.age)
person1.sayhello()

// 2
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    person() {
      return 'I am ' + this.name;
    }
  }
  
  class Student extends Person {
    constructor(name,age, statusi) {
      super(name,age);
      this.statusi = statusi;
    }
    show() {
      return this.person() + ',i am a ' + this.statusi;
    }
  }
  
  
  let person2 = new Person("Nika Aptsiauri", 18);
  
  console.log(person2.name);       
  console.log(person2.age);        
  console.log(person2.person());   
  
  let student1 = new Student("Anna ", 20, "student");
  
  console.log(student1.name);      
  console.log(student1.age);       
  console.log(student1.statusi);   
  console.log(student1.show());    
  
  
// 3
class BankAccount {
  #balance; // radgan #, amitom tan gamocxadebaao da tan privateio(class-shi asea)

  constructor(balance = 0) {
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount; // anu balanss daamatos amounti
      console.log(`deposit: ${amount}, new balance ${this.#balance}`);
    } else {
      console.log('not valid input');
    }
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Not enough balance.');
    } else if (amount > 0) {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}. Balance: ${this.#balance}.`);
    } else {
      console.log('Withdrawalmust be positive.');
    }
  }

  Balance() {
    console.log(this.#balance);
  }
}

  
