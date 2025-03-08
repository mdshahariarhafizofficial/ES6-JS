const products = [
    {id: 1, brand: 'apple', color: 'white', price: 2000},
    {id: 2, brand: 'Nokia', color: 'black', price: 1000},
    {id: 3, brand: 'apple', color: 'gold', price: 4000},
    {id: 4, brand: 'xiaomi', color: 'gold', price: 100},
    {id: 5, brand: 'Infinix', color: 'red', price: 1000},
    {id: 6, brand: 'itel', color: 'green', price: 2000},
    {id: 7, brand: 'apple', color: 'black', price: 3000},
];

// products.forEach(product => console.log(product));
const specialProducts = products.filter(f => f.color === 'gold');
// console.log(specialProduct);
const popularProduct = products.find(p => p.price >= 1000);
// console.log(popularProduct);

products.forEach(p => {
    if (p.brand === 'apple') {
        p.price+=100;
    }
});
// console.log(products);

const findId2 = products.find(p => {
    if ( p.id === 2 ) {
        return p;
    }
});

// console.log(findId2);
const findAllApple = products.filter(p => p.brand === 'apple');
// console.log(findAllApple);
