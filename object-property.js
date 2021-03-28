const student = [
    {id: 21, name:'Omar Sunny'},
    {id: 25, name:'Mannaaaa'},
    {id: 31, name:'moyouri'},
    {id: 41, name:'Dipjol'}
]
nameArray = []
for(let i = 0; i < student.length ; i++) {
    const element = student[i];
    const result = element.name;
    nameArray.push(result)
} 
console.log(nameArray)
// output: [ 'Omar Sunny', 'Mannaaaa', 'moyouri', 'Dipjol' ]

// using map


const newArray = student.map(x => x.name);
const ids = student.map(x => x.id)
console.log(ids)
console.log(newArray)
// output: [ 'Omar Sunny', 'Mannaaaa', 'moyouri', 'Dipjol' ]
// [ 21, 25, 31, 41 ]

// .......using filter to get the object  of id getter than 25....

const filterArray = student.filter(x => x.id > 25)
console.log(filterArray)
// output: [ { id: 31, name: 'moyouri' }, { id: 41, name: 'Dipjol' } ]

// .....using find .......

const findArray = student.find(x => x.id > 25)
console.log(findArray)
// output: { id: 31, name: 'moyouri' }