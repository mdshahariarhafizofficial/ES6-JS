// Normal Function
function sum(n1, n2) {
    let sum = n1+ n2;
    return sum;
}
// console.log(sum(50, 40));

// Arrow Function 
const sum1 = (num1=0, num2=0) => result = num1+num2;
// console.log(sum1(50, 40));

const square = a => a*a;
// console.log(square(10));

const div = (x, y) =>{
    return x/y;
}
// console.log(div(10, 2));

document.getElementById('click').addEventListener('click', () => {
    const h2 = document.createElement('h2');
    h2.innerText = "Thanks for clicked me!";
    document.getElementById('msg').appendChild(h2);
})

