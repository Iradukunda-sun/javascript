let numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers)

//distructuring functions
let [num1, num2, num3, num4, num5, num6]= numbers
console.log(num1, num2, num3, num4,num5, num6)

let names = ['Curry', 'Lebron','Ant', 'Davies']
let [person1,person2,person3,person4]=names
console.log(person1, person2, person3, person4)

let constants = [3.14, 100, 9.81, 37]
let [pi,boilingPoint, gravity, bodyTemp]=constants

console.log(pi, boilingPoint, gravity, bodyTemp)

let fullStackDev = [['html', 'javascript', 'bootstrap', 'css'],['node js','mogodb', 'express js']]
let [frontEnd, backEnd]= fullStackDev
console.log(frontEnd)
console.log(backEnd)
for(const [first, second] of fullStackDev){
    console.log(first,second)
}



//spread operator
let moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//distructuring functions
let [number1, number2, number3,...rest]= moreNumbers
console.log(number1, number2, number3)
console.log(rest)

let eastAfrica=[['Uganda','Kampala'],['Kenya','Nairobi'],['Tanzania','Dodoma']]
for(const [country,city] of eastAfrica){
    console.log(country, city)
}

//objects using distructuring
const rectangle ={
    length: 10,
    width: 5,
    height: 7,
}

let {length, width, height}= rectangle
console.log(width, height,length,)

let addNumbers = (...args) => {
    return args
}
console.log(addNumbers(1,2,3,4,5,6,7,8,9,10))