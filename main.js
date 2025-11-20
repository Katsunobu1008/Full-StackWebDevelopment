const add = (a, b) => a + b;
console.log(add(2, 3));

let result = 5;
result += 10;
console.log(result);

let array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const cofee = {
  name: 'Latte',
  price: 300,
  size: 'Medium',
  isHot: true,
  toppings: ['Whipped Cream', 'Cinnamon'],
  nutrition: {
    calories: 150,
    sugar: '12g',
    fat: '5g',
  },
};

console.log(cofee.nutrition.calories);
console.log(cofee.toppings[0]);
console.log(cofee.nutrition);
console.log(cofee.isHot);

function addd(num1, num2) {
  return num1 + num2;
}

const returnedValue = addd(5, 10);
console.log(returnedValue);
console.log(returnedValue);
