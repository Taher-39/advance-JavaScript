const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const newArray = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    newArray.push(result);
}
console.log(newArray);

//normal function
function  square(element) {
    return element * element;    
}

//arrow way
const square1 = element => element * element;
const square2 = x => x * x;

//map() way 
const result = numbers.map(function(element, index, array){
    // console.log(element, index, array);
});

//other way map()
const result2 = numbers.map(x => x * x);
console.log(result2);

//filter()
const bigValue = numbers.filter(x => x > 5);
console.log(bigValue);

//forEach()
const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i])
}

// after
items.forEach(function (item) {
    copyItems.push(item)
});