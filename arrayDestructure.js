const n1 = [1, 2, 4, 5, 6, 3];

const [a] = n1;
// console.log(a);

const [,b,,,,c] = n1;
// console.log(b,c);

// nested Array
const n2 = [100, 200, [50000, 100000,], 600, 500];
const [,,[x, y]] = n2;
// console.log(x, y);

// more nested
const n3 = [1, 2, 3, [3333, 5555, [8888888, 7777777], 78 ], 65, 8, 8];

const [,,,[,,,se]] = n3;
// console.log(se);

const [,,,[,,[et, svn]]] = n3;
// console.log(et, svn);



