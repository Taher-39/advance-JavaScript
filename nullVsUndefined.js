//undefined case
//1
let alim;
console.log(alim);
//1
function add(num1, num2){
    console.log(num1 + num2);
}

const result = add(15, 6);
console.log(result);//undefined,,cause add function no return

//3
function subtraction(num1, num2) {
    console.log(num1, num2);
}
subtraction(15);

// 4
const student = {studentName: 'Khalid', age: 23}
const { age, phone } = student;
console.log("age:", age, "phone:", phone);

//5
let fun = undefined;
console.log(fun);

//6
const result2 = 1 + undefined;
console.log("result of 1 + undefinded:", result2);//NaN

//7
console.log('undefined:',undefined);

//null case area


/* typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true */
console.log('isNaN:',isNaN('h'));//true

/*isNaN case:true if the given value is NaN; otherwise, false.
 isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN('37');      // false: "37" is converted to the number 37 which is not NaN
isNaN('37.37');   // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5");    // true
isNaN('123ABC');  // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
isNaN('');        // false: the empty string is converted to 0 which is not NaN
isNaN(' ');       // false: a string with spaces is converted to 0 which is not NaN
 */
const value = 1 + null;

 console.log("1 + null", value);


console.log("null", null);