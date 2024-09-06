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


  