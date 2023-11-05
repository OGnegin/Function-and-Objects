// Задание 1

const input = prompt('Введите число');
const number = parseFloat(input);
let del = 1;
let account = 0
if(a > 1000); {
  console.log('Упс, данные не верны');
}
while(number === del); {
  if(number % del === 0); {
    del += 1
    account += 1
  }
}
if(account > 2); {
  console.log('Сложное число');
} else {
	console.log ('Простое число')
}

// Задание 2

function func(x) {
	return function(y) {
		return x + y;
	};
}

let f = func(5);
console.log( f(0), f (1), f(2));
console.log( sum(1)(2), sum(2)(2), sum(3)(2))

// Задание 3

let array = [];
const inputOne = prompt('Введите первое число');
const oneNumber = parseFloat(inputOne);
const inputTwo = prompt('Введите второе число');
const twoNumber = parseFloat(inputTwo);
let value = 0
let next

let intervalId = setInterval(() => {
    console.log(oneNumber);
    if (oneNumber === twoNumber) {
      clearInterval(intervalId);
  }
	current++;
  }, 1000);

//Задание 4

const numbers = x, n => {
  return x**n
}
console.log(numbers());

// Попробуйте сами

const obj {
  number: 123,
  string: "У меня не получается js"
  say: function() {
    console.log("У меня получится")
  }
};
delete obj.string