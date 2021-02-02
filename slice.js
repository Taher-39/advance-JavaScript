const nums = [1, 2, 4, 5, 6, 8, 9, 7]
const part = nums.slice(0, 3);
console.log(part, nums);

const remove = nums.splice(1, 2);
console.log(remove, nums);

const join =  nums.join(" ");
console.log(join);