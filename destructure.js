const student = {
    name1: 'rahim',
    age1: 20,
    marks: { bangla: 50, eng: 33 },
    roll: 69,
}

let { name1, age1, marks } = student;
// console.log(name1, age1);

// console.log(Object.keys(student));

for( let keys of Object.keys(student) ){
    const keyValuePair = `
        Key: ${keys}, Value: ${student[keys]}
    `    
    // console.log(keyValuePair);
    
};


const numbers = [ 78, 85, 87, 54, 24, 44, 411 ];
const [ i1, b, c ] = numbers;
console.log(i1, b, c);
