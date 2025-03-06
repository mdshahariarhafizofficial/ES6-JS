const products = [
    {id: 1, brand: 'Nokia', color: 'black', price: 1000},
    {id: 2, brand: 'iphone', color: 'gold', price: 2000},
    {id: 3, brand: 'xiaomi', color: 'gold', price: 100},
    {id: 4, brand: 'Infinix', color: 'red', price: 1000},
    {id: 5, brand: 'itel', color: 'green', price: 2000},
];

// products.forEach(product => console.log(product));
const specialProducts = products.filter(f => f.color === 'gold');
// console.log(specialProduct);
const popularProduct = products.find(p => p.price >= 1000);
// console.log(popularProduct);
