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
