// 1
function callAfterOneSecond(callback) {
    setTimeout(function() {
      callback();
    }, 1000);
  }
  
  callAfterOneSecond(() => {
    console.log("1 wamis  merea es? ");
  });
  
  
// 2
  function compareNumbers(num1, num2, callback1, callback2) {
    if (num1 > num2) {
      callback1(); 
    } else {
      callback2(); 
    }
  }
  compareNumbers(
    5, 
    3, 
    () => console.log("First number is greater!"),
    () => console.log("Second number is greater or equal!")
  );

// 3
function any(array, num, callback) {
  array.push(num); 
  callback(array); 
}
any([1, 2, 3], 4, (newarray) => console.log(newarray));


// 4
// aq Promises gadaeca dro da funqcia 
async function someFunction() {
  await new Promise((funqcia) => setTimeout(funqcia, 2000)); 
  console.log('2 wamis mere'); 
}

someFunction();

// 5
async function someFunction(age) {
  if(age > 18){
      await new Promise((funqcia) => setTimeout(funqcia, 3000)); 
      console.log('2 wamis mere'); 
  }else{
      console.log('aq darejeqda')
  }

}
someFunction(12);

// 6 
const randomPromise = () => new Promise((resolve, reject) => {
  const randomNumber = Math.random(); // Generate a random number between 0 and 1

  setTimeout(() => {
    if (randomNumber < 0.5) {
      resolve('Shesrulda'); // Resolve 50% of the time
    } else {
      reject(new Error('darejectda')); // aq ase error rom qnas 
    }
  }); 
});
randomPromise()
  .then((message) => console.log('Success:', message))
  .catch((error) => console.error('Error:', error.message)); // aq daiwhiros eg errori

// 7
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); 
  
}).then(function(result) { // (**)
  console.log(result); // 1
  return result * 2;

}).then(function(result) { // (***)
  console.log(result); // 2
  return result * 2;

}).then(function(result) {

  console.log(result); // 4
  return result * 2;

});
