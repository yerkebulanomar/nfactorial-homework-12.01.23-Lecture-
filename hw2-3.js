console.log('Part 3');

let salaries = {
    Yereke: 200,
    Nurbol: 300,
    Ali: 250,
    Rustem: 330
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log('Total salary of our team is', sum);