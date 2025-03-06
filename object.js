const obj1 = {
    objName: 'pen',
    objId: 1,
    objPrice: 5000
}

// Object.seal(obj1);
Object.freeze(obj1);

obj1.objPrice = 8000;
obj1.objColor = 'red';
// delete obj1['objPrice'];

// console.log(obj1);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

