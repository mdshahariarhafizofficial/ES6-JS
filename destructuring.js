const user = {
    id: 1,
    name: 'Mushfiq',
    address:{
        city: 'Dhaka',

        birthPlace: {
            place: 'Bogura',
            birthDate: {
                date: '05-11-1995',
            }
        }

    }
};

const {id: no} = user;
// console.log(no);

const {address: {city} } = user;
// console.log(city);

// nested object
const {address: { birthPlace:{place: jonmoSthan} }} = user;
// console.log(jonmoSthan);

// more nested object
const { address:{
    birthPlace:{
        birthDate:{
            date
        }
    }
} } = user;

// console.log(date);
// console.log(no, city, jonmoSthan, date);



