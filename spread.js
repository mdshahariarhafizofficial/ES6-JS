const arr1 = [50, 52, 41, 100, 800, 78];
// console.log(...arr);
const arr2 = [100, 500, 1000, 20000, 500000];

const joinArr = [...arr2, ...arr1];
// console.log(joinArr);

const studentObj1 ={
    sName: 'molla',
    sRoll: 45,
} 
const studentObj2 ={
    sAge: 18,
    birthYear: 2006,
}

const joinObj = {...studentObj1, ...studentObj2};
// console.log(joinObj);


