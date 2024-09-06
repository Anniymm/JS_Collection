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

// 8
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); 
  
}).then(function(result) { 
  console.log(result); // 1
  return result * 2;

}).then(function(result) { 
  console.log(result); // 2
});

// 9
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
  
}async function countUpToNumber() {
  let userInput = Number(prompt('Please enter a positive number:'));
  for (let i = 1; i <= userInput; i++) {
    console.log(i);
    await delay(1000); 
  }
}
countUpToNumber();


// 10
function Useri(){
    let name = prompt('Enter your username: ');
    return name;
}

function information(){
    let namee = Useri();
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); 
      })
      .then(data => {
        console.log(data); 
      })
      .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
    
}
information()

// 11
async function fetchAndPrintInfo() {
  const url1 = 'https://api.github.com/users/temuritsutskiridze.'; 
  const url2 = 'https://api.github.com/users/nikaaptsiauri.'; 

  try {
      // orive rom dafetchos
      const [response1, response2] = await Promise.all([
          fetch(url1),
          fetch(url2)
      ]);
      // shemowmena
      if (!response1.ok || !response2.ok) {
          throw new Error('response were not ok');
      }
      // jsonad vaqciot
      const data1 = await response1.json();
      const data2 = await response2.json();
      console.log(data1);
      console.log(data2);
  } catch (error) {
      console.error('Error during fetching data:', error);
  }
}
fetchAndPrintInfo();

// 12
async function fetchFirstCompleted() {
  const url1 = 'https://api.github.com/users/temuritsutskiridze.';
  const url2 = 'https://api.github.com/users/Anniymm.''; 
  const url3 = 'https://api.github.com/users/nikaaptsiauri.'; 

  try {
      const fetchPromise1 = fetch(url1);
      const fetchPromise2 = fetch(url2);
      const fetchPromise3 = fetch(url3);

      const firstResponse = await Promise.race([
          fetchPromise1,
          fetchPromise2,
          fetchPromise3
      ]);

      const data = await firstResponse.json();

      console.log('First data:', data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}
fetchFirstCompleted();
