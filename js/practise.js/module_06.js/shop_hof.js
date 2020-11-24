const peoples = [
	{ id: 1, name: 'Vova', age: 17, budget: 4000, isComplete: true },
	{ id: 2, name: 'Mike', age: 25, budget: 3400, isComplete: false },
	{ id: 3, name: 'Sara', age: 30, budget: 400, isComplete: true },
	{ id: 4, name: 'Bob', age: 15, budget: 200, isComplete: false },
];

//find Sara

// [].methodName(function (element, index, array) {
// })

const findUserName = (userName, peoplesArr) => {
	return peoplesArr.find(person => person.name === userName)
}
let result = findUserName('Sara', peoples)
console.log(result);