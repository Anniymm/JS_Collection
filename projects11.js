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
  
  
