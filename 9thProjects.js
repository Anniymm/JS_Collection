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