// Q1. Increase all prices by 10
const prices = [100, 200, 300];
const result = prices.map(p => p + 10);


// Q2. Filter even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const result1 = numbers.filter(n => n % 2 === 0);

//Q3. Check if any number is negative
const nums = [10, -5, 20];
const result2 = nums.some(n => n < 0);

//Q4. Check if all marks are passing (>=40)
const marks = [45, 60, 70];
const result3 = marks.every(m => m >= 40);

//Q5. Find first number greater than 50
const scores = [20, 40, 55, 70];
const result4 = scores.find(s => s > 50);

// Q6. Calculate total bill amount
const bills = [120, 300, 80];
const result5 = bills.reduce((sum, b) => sum + b, 0);


// Q7. Convert hours to minutes
const hours = [1, 2, 1.5];
const result6 = hours.map(h => h * 60);

// Q8. Find first empty string
const inputs = ['name', '', 'email'];
const result7 = inputs.find(i => i === '');

// Q9. Check if any value is zero
const values = [5, 0, 8];
const result8 = values.some(v => v === 0);

// Q10. Double all numbers
const num = [2, 4, 6];
const result_num = nums.map(n => n * 2);

// Q11. Extract first two values using destructuring
const data = [10, 20, 30];
const [a, b] = data;


// Q12. Merge two arrays using spread
const a1 = [1, 2];
const b1 = [3, 4];
const total = [...a1, ...b1];


