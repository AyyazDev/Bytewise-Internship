// cout statement
console.log('Hello from main.js')

// Variables

let age = 25
console.log(age)

const salary = 0
console.log(salary)

let sum = 0
sum = 5
console.log(sum)

const name = 'Ayyaz'
const language = "Javascript"
const channel = `Codevolution`

const total = 0
const PI = 3.14

const isPrimaryNumber = true
const isNewUser = false

let result
console.log(result)

const res = undefined

const data = null

const person = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    Age: 30
}

console.log(person.firstName)

const oddNumbers = [1,3,5,7,9]
console.log(oddNumbers[2])

let a = 10
a = 'Ayyaz'
a = true
console.log(a)


// Operators

let x = 10
let y = 5

console.log(x % y)
console.log(++x)
console.log(--y)

console.log(y <= x)

const isValidNumber = x > 8 && 8 > y 
console.log(isValidNumber)

const isValid = true
console.log(!isValid)

console.log('Bruce ' + 'Wayne')

const isEven = 10 % 2 === 0 ? 'Number is Even' : 'Number is Odd'
console.log(isEven)

console.log(true + '3')
console.log('Bruce' - 'Wayne')
console.log('5' - null)
console.log('5' + undefined)

console.log(parseFloat('3.14'))
console.log((500).toString())
console.log(Boolean(10))

const var1 = null
const var2 = undefined

console.log(var1 == var2)
console.log(var1 === var2)


// Conditional statements

const num = 0

if (num > 0)
{
    console.log('Number is positive')
}
else if (num < 0)
{
    console.log('Number is negative')
}
else
{
    console.log('Number is zero')
}

const color = 10

switch(color)
{
    case 'Red':
        console.log('Color is Red')
        break
    case 'Blue':
        console.log('Color is Blue')
        break
    case 'Green':
        console.log('Color is Green')
        break  
    default: 
        console.log('Not a valid color')  
}

// Loops

for (let i=1; i<=5; i++)
{
    console.log('Iteration number ' + i)
}

let i = 1

while(i<=5)
{
    console.log('Iteration number ' + i)
    i++
}

let j = 1;
do {
    console.log('Iteration number ' + j)
    i++
}
while(i<5)

const numArray = [1,2,3,4,5]

for (let num of numArray)
{
    console.log(num)
}


// Functions

function greet(name)
{
    console.log('Good Morning ' + name)
}

greet('Ayyaz')
greet('Ali')
greet('Akram')

function add(a,b)
{
    return a+b
}

const addition = add(5,5)
console.log(addition)

// Arrow Function
const add2 = (a,b) => a+b

const sum2 = add(15,15)
console.log(sum2)


// Block, Function & Global Scope

const number = 100

if (true)
{
    const myName = 'Ayyaz'
    console.log(myName)
    console.log(number)
}

function namee()
{
    const myName = 'Ayyaz'
    console.log(myName)
    console.log(number)
}

namee()

console.log(number)


