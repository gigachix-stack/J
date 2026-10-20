const tasks = [
    {
        number: 211,
        solution: `
let a = 5;
let b = 10;

console.log(a + b);
`
    },
    {
        number: 212,
        solution: `
console.log("Hello, world!");
`
    },
    {
        number: 213,
        solution: `
let name = "Алия";

console.log(name);
`
    },
    {
        number: 214,
        solution: `
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
`
    },
    {
        number: 215,
        solution: `
console.log(Math.max(5, 12, 8));
`
    },
    {
        number: 216,
        solution: `
console.log(Math.min(5, 12, 8));
`
    },
    {
        number: 217,
        solution: `
console.log("JavaScript".length);
`
    },
    {
        number: 218,
        solution: `
console.log("javascript".toUpperCase());
`
    },
    {
        number: 219,
        solution: `
console.log("HELLO".toLowerCase());
`
    },
    {
        number: 220,
        solution: `
console.log(15 % 4);
`
    },
    {
        number: 221,
        solution: `
let numbers = [1, 2, 3];

console.log(numbers);
`
    },
    {
        number: 222,
        solution: `
let numbers = [1, 2, 3];

console.log(numbers[0]);
`
    },
    {
        number: 223,
        solution: `
let numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);
`
    },
    {
        number: 224,
        solution: `
let numbers = [1, 2, 3];

numbers.pop();

console.log(numbers);
`
    },
    {
        number: 225,
        solution: `
let numbers = [1, 2, 3];

let sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);

console.log(sum);
`
    },
    {
        number: 226,
        solution: `
let numbers = [1, 2, 3, 4];

let result = numbers.filter(number => {
    return number > 2;
});

console.log(result);
`
    },
    {
        number: 227,
        solution: `
let numbers = [1, 2, 3];

let result = numbers.map(number => {
    return number * 2;
});

console.log(result);
`
    },
    {
        number: 228,
        solution: `
let numbers = [1, 2, 3];

console.log(numbers.includes(2));
`
    },
    {
        number: 229,
        solution: `
function square(number) {
    return number * number;
}

console.log(square(5));
`
    },
    {
        number: 230,
        solution: `
function greet(name) {
    return "Привет, " + name;
}

console.log(greet("Алия"));
`
    },
    {
        number: 231,
        solution: `
document.body.innerHTML = "<h1>Моя первая страница</h1>";
`
    },
    {
        number: 232,
        solution: `
document.body.style.backgroundColor = "lightblue";
`
    },
    {
        number: 233,
        solution: `
const button = document.createElement("button");

button.textContent = "Нажми меня";

button.addEventListener("click", function () {
    alert("Привет!");
});

document.body.appendChild(button);
`
    },
    {
        number: 234,
        solution: `
const input = document.createElement("input");
const button = document.createElement("button");

button.textContent = "Показать имя";

button.addEventListener("click", function () {
    alert(input.value);
});

document.body.append(input, button);
`
    },
    {
        number: 235,
        solution: `
let count = 0;

const counter = document.createElement("p");
const button = document.createElement("button");

counter.textContent = count;
button.textContent = "+1";

button.addEventListener("click", function () {
    count++;
    counter.textContent = count;
});

document.body.append(counter, button);
`
    }
];

tasks.forEach(task => {
    console.log(`Задание №${task.number}`);
    console.log("Выполнение:");
    console.log(task.solution);
    console.log("--------------------------------");
});
