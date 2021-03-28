// const numbers = [3, 4, 5, 6, 7, 8] 
// const output = []
// for(let i = 0; i < numbers.length; i++ ){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result)
// }
// console.log(output)
// output: [ 9, 16, 25, 36, 49, 64 ]


// function square (element) {
//         return element * element;
//     }
    
// const square = element => element * element;
// const square = x => x  * x
//  const numbers = [3, 4, 5, 6, 7, 8] 
// const result = numbers.map(function (element){
//    return element * element
// })

// const numbers = [3, 4, 5, 6, 7, 8] 
// const result = numbers.map(element => element * element)
// console.log(result)

// output:
// [ 9, 16, 25, 36, 49, 64 ]

// const numbers = [3, 4, 5, 6, 7, 8] 
// const result = numbers.map(x => x * x)
// console.log(result)

// output:
// [ 9, 16, 25, 36, 49, 64 ]


// const numbers = [3, 4, 5, 6, 7, 8] 
// const biggerNumber = numbers.filter(x => x > 5);
// console.log(biggerNumber)
// output: [ 6, 7, 8 ]

// const numbers = [3, 4, 5, 6, 7, 8] 
// const biggerNumber = numbers.map(x => x > 5)
// console.log(biggerNumber)

// output: [ false, false, false, true, true, true ]

const numbers = [3, 4, 5, 6, 7, 8] 
const isThere = numbers.find( x => x > 5)
console.log(isThere)