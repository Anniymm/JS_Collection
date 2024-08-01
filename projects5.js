// forEach - yoveli arrays elementistvis asrulebs funqcias.
// ** sheidzleba reduce-itac
// //1 
// function array_method(masivi) {
//     let sum = 0; 
//     masivi.forEach(items =>{
//         sum+=items;
//     })
//     return sum
// }
// const numbers = [98, 29, 3, 4, 10];
// console.log(array_method(numbers)); 

// //2
// function array_method(masivi) {
//     let sum = 0; 
//     masivi.forEach(items =>{
//         sum+=items;
//     })
//     let average = sum / masivi.length;
//     return average;
// }
// const numbers = [1, 2, 3, 4];
// console.log(array_method(numbers)); 

// // 3
// function array_methods(masivi){
//     return masivi.sort((a, b) => a - b); 
// }
// const masivi =  [2, 5, 6, 9, 2 , 1];
// console.log(array_methods(masivi)) 

// // 4
// function array_methods(masivi){
//     let largest = 0;
//     for(let i=0; i<masivi.length; i++){
//         if(masivi[i] > largest){
//             largest = masivi[i]
//         }
//     }
//     return largest;
// }
// const masivi =  [2, 5, 6, 9, 7, 2,76 , 1];
// console.log(array_methods(masivi))

// //5
// function array_methods(masivi){
//     let newArray = masivi.sort((a, b) => a - b);
//     return newArray[0];
// }
// const masivi =  [2, 5, 6, 9, 7, 2 , 1];
// console.log(array_methods(masivi))

// //6
// function array_methods(array, input) {
//     input = String(input); // prompti ro sringad iyos
//     return array.includes(input);
// }
// let input = prompt('Enter a word ');
// const masivi = ['rame', 'rame2'];
// console.log(array_methods(masivi, input));

// //7
// function array_methods(array, input) {
//     input = String(input); // prompti ro sringad iyos
//     let index = array.indexOf(input);
//     let newArray = array.splice(index, 1);
//     return array
// }
// let input = prompt('Enter a word ');
// const masivi = ['rame', 'rame2', 'rame4']; 
// console.log(array_methods(masivi, input));

// //8
// function array_methods(array, input) {
//     input = String(input); 
//     let count = 0;
//     for (let item of array) {
//         if (item === input) {
//             count++;
//         }
//     }
//     console.log(count)
// }

// let input = prompt('Enter a word ');
// const masivi = ['rame', 'rame2','rame', 'rame4'];
// array_methods(masivi, input);

// // 9
// function array_methods(array) {
//     let count = 0;
//     for(let item of array){
//         if(item % 2 == 0){
//             count+=item;
//         }
//     }
//     console.log(count)
// }

// const masivi = [1, 2, 3, 4, 5, 6, 8];
// array_methods(masivi);








