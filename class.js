class mobile{
    constructor(brand, model, color, price){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    increasePrice(){
        this.price += 500;
        // console.log(this.price);
        
    }
}

const iphone = new mobile('iphone', '16 pro max', 'gold', 150);
// console.log(iphone);
iphone.increasePrice();

class cashOut{
    constructor( acNo, amount, pin  ){
        this.acNo = acNo;
        this.amount = amount;
        this.pin = pin;
    }
    cashOutCharge(){
        const cashOutCharge = (this.amount*2)/100;
        // console.log(`${cashOutCharge} Tk`);
    }
}

const customer1 = new cashOut(12345678910, 1000, 1234);
// console.log(customer1);
// customer1.cashOutCharge();
const customer2 = new cashOut(12345678910, 50000, 1234);
// console.log(customer2);
// customer2.cashOutCharge();
