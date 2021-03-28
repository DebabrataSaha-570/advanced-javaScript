//............. square of each element of an array using for loop
const numbers = [12, 13, 5, 7] 
let squareNumbers = []
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i]
    const result = element * element
    squareNumbers.push(result)
}
console.log(squareNumbers)

// ........ square of each element of an array using map........

const numbers1 = [2, 3, 4, 5, 6] 
const result1 = numbers1.map(x => x * x)
console.log(result1)

// ........ finding larger than number 3 from  numbers2 array ......

const numbers2 = [3,4, 5, 6, 6, 7, 8, 9]

const result2 = numbers2.filter( x => x > 3)
console.log(result2)

//........ doing find on numbers3 array ............. 
const numbers3 = [3, 4, 56, 54, 32, 435, 53,44] 
const result3 = numbers3.find( x => x > 3)
console.log(result3)
// output: 4