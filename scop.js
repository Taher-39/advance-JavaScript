let bonus = 10;
function sum(first, second){
    let result = first + second + bonus;
    
    if (result > 15) {
        //let feel = 'nice';
        var feel = 'nice';
        feel = 'cute'
        // console.log(feel);
    }
    console.log(feel);//feel,,with no problem.
    return result;    
}
const addResult = sum(2, 5);
console.log(addResult);

console.log(name)//undefined but name is global but there value is not access
var name = 'halim';

// console.log(codeFun);//error see cause let & const is scope variale
// let codeFun = 'javaScript';