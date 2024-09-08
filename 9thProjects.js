// 42
function isAnagrams(){
    let arr1 = prompt('Enter the first string: ').split('');
    let arr2 = prompt('Enter the second string: ').split('');
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function main(){
    let anagram = isAnagrams();
    if(anagram){
        console.log('are anagrams')
    }else{
        console.log('not anagrams')
    }
}
main()

// 43
function passwordValidator() {
    let password = prompt('Password: ')
    // regex-ebi 
    // test-it daabrunebs true-s an falses da magis mixedvit mere validaciebi
    const lengthRequirement = password.length >= 8;
    const containsLetters = /[a-zA-Z]/.test(password);
    const containsNumbers = /\d/.test(password);
    const containsSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < 8) {
        if (containsNumbers) {
            return "Very Weak";
        }
        if (containsLetters) {
            return "Weak";
        }
        return "Very Weak";
    }

    if (containsLetters && containsNumbers && containsSpecialChars) {
        return "Very Strong";
    }
    if (containsLetters && containsNumbers) {
        return "Strong";
    }
    if (containsLetters) {
        return "Weak";
    }
    if (containsNumbers) {
        return "Very Weak";
    }
    return "Very Weak";
}

console.log(passwordValidator());

// 44
function countMonthsUntilPaidOff(balance, apr, monthlyPayment) {
    const monthlyRate = (apr / 100) / 12;
    // esaa formulao
    const months = Math.ceil(
        -Math.log(1 - (monthlyRate * balance) / monthlyPayment) / Math.log(1 + monthlyRate)
    );
    return months;
}

// Example usage
const result = countMonthsUntilPaidOff(5000, 12, 100);
console.log(`It will take you ${result} months to pay off this card.`);


// 45
function validation() {
    let name = prompt('Enter the first name: ');
    let lname = prompt('Enter the last name:');
    let zip = prompt('Enter the ZIP code: ');
    let emp = prompt('Enter an employee ID: ');
    let isValid = true; // es bolos validaciistvis
    if (!name) {
        console.log('The first name must be filled in.');
        isValid = false;
    } else if (name.length < 2) {
        console.log(`${name} is not a valid first name. It is too short.`);
        isValid = false;
    }
    if (!lname) {
        console.log('The last name must be filled in.');
        isValid = false;
    } else if (lname.length < 2) {
        console.log(`${lname} is not a valid last name. It is too short.`);
        isValid = false;
    }
    const pattern = /^[A-Z]{2}-\d{3}$/;
    if (!pattern.test(emp)) {
        console.log(`${emp} is not a valid ID. It should be in the format AA-123.`);
        isValid = false;
    }
    if (isNaN(zip)) {
        console.log('The ZIP code must be numeric.');
        isValid = false;
    }
    if (isValid) {
        console.log('Everything is OK.');
    }
}

validation();

// 46
function camel(){
    let input = prompt('camelCase: ');
    let arr = input.split(/(?=[A-Z])/);
    let lowerCaseWords = arr.map(word => word.toLowerCase());
    let newword = lowerCaseWords.join('_');
    console.log(`snake_case: ${newword}`)
}
camel();

// 47
function depositCoins() {
    const targetAmount = 50; 
    let totalAmount = 0; 

    console.log(`Amount Due: ${targetAmount}`);

    while (totalAmount < targetAmount) {
        let coin = parseInt(prompt('Insert Coin : '), 10);

        if (coin === 25 || coin === 10 || coin === 5) {
            totalAmount += coin;
            let amountDue = targetAmount - totalAmount;
            if (amountDue > 0) {
                console.log(`Amount Due: ${amountDue}`);
            } else {
                console.log(`Change Owed: ${Math.abs(amountDue)}`);
            }
        } 
    }
}
depositCoins();

// 48
function removeLetters(lettersToRemove) {
    let input = prompt('Input: ');
    // asoebis mosahoreblad regex
    const pattern = new RegExp(`[${lettersToRemove}]`, 'gi');
    return input.replace(pattern, '');
}

const lettersToRemove = 'aeiouAEIOU';
const result = removeLetters(lettersToRemove);
console.log(result); 
