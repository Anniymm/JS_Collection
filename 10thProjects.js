// 49 regexebit, es cota sxvanairadac sheidzleba, if-elsebit
function vanity(){
    let input = prompt('Plate: ');
    if(input.length >= 2 && input.length <=6){
        const regex1 = /^[A-Z]{3}[1-9]{3}$/;
        const regex2 = /^[A-Z]{2}[1-9]{4}$/;
        const regex3 = /^[A-Z]{5}[1-9]{1}$/;
        const regex4 = /^[A-Z]{6}$/
        if(regex1.test(input) || regex2.test(input) || regex3.test(input) || regex4.test(input)){
            console.log('Valid')
        }else{
            console.log('Invalid')
        }
    }
}
vanity();




