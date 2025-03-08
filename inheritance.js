class vehicle {
    constructor( name, color, type ){
        this.name = name;
        this.color =color;
        this.type = type;
    }
    vehicleRunning(){
        // console.log('Colche gari jatra bari');
    }
}

class truck extends vehicle{
    constructor( name, color, type, wheel){
        super(name, color, type);
        this.wheel = wheel;
    }
    truckStop(){
        // console.log("truck thamao");
    }
}

const conatinerTruck = new truck('Container Big', 'green', 'truck', 40);
// console.log(conatinerTruck);
conatinerTruck.vehicleRunning();
conatinerTruck.truckStop();