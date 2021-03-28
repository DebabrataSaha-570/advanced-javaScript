// const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// const part = nums.slice(2, 5)
// console.log(part)
// console.log(nums)

// const removed = nums.splice(2, 3, 77);
// console.log(removed)
// console.log(nums)

// const together = nums.join(' , ')
// console.log(together)

// .....slice...... 

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// const part = nums.slice(1, 4)
// console.log(part)
// output: [ 2, 3, 4 ]
// console.log(nums)
// output: [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]


// .....splice ..... 
// const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// const removed = nums.splice(2, 3, 1000, 1002, 1003)
// console.log(removed) //output:[ 3, 4, 5 ]
// console.log(nums) // output: [ 1, 2, 1000, 1002, 1003, 6, 7, 8]


// .......Join .......

const nums = [1, 2, 3, 4, 5, 6, 7, 8]
const together = nums.join(' ami ')
console.log(together) //output: 1 ami 2 ami 3 ami 4 ami 5 ami 6 ami 7 ami 8