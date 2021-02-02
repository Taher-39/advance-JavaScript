const students = [
    {id: 20, name: "Rizuan"},
    {id: 25, name: "Iliyasi"},
    {id: 28, name: "Zahid"},
    {id: 56, name: "Zahid"}
]
const newItems = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    newItems.push(element);
}
console.log(newItems);

//using map() 
const names = students.map(x => x.name);
const Ids = students.map(x => x.id);
console.log(names);
console.log(Ids);

//find & filter

const bigger = students.filter(x => x.id > 25);
const biggerOne = students.find(x => x.id > 25);
console.log(bigger);
console.log(biggerOne);