class Tyre {
    constructor(brand, size) {
        this.tyre = brand + " " + size;
    }
}

class Car extends Tyre {
    constructor(door, seat) {
        super("dunlop", 15 + ' ' + "inch");
        this.door = door;
        this.seat = seat;
    }
    serialNumber() {
        let chars = "012345689abcdefghijklmnopqrstuvwxyz";
        let serialLength = 8;
        let serialLength2 = 4;
        let serialLength3 = 4
        let serialLength4 = 12;
        let randomSerial = "";
        let randomSerial2 = "";
        let randomSerial3 = "";
        let randomSerial4 = "";
        let randomNumber;

        for (let i = 0; i < serialLength; i++) {
            randomNumber = Math.round(Math.random() * chars.length);
            randomSerial += chars.substring(randomNumber, randomNumber + 1);
        }

        for (let i = 0; i < serialLength2; i++) {
            randomNumber = Math.round(Math.random() * chars.length);
            randomSerial2 += chars.substring(randomNumber, randomNumber + 1);
        }

        for (let i = 0; i < serialLength3; i++) {
            randomNumber = Math.round(Math.random() * chars.length);
            randomSerial3 += chars.substring(randomNumber, randomNumber + 1);
        }

        for (let i = 0; i < serialLength4; i++) {
            randomNumber = Math.round(Math.random() * chars.length);
            randomSerial4 += chars.substring(randomNumber, randomNumber + 1);
        }

        if (randomSerial[7] != "-") {
            randomSerial += "-" + randomSerial2.concat("-") + randomSerial3.concat("-") + randomSerial4
            return randomSerial;
        }
    }
}

class Agya extends Car {
    constructor() {
        super(5, 5 + " " + "seater");
        this.varian = "Agya";
        this.sn = this.serialNumber();
        this.year = 2020;
        this.guarantee = Math.round(Math.random() * 10);
    }
    callAgya() {
        // let warranty = Math.round(this.year + this.guarantee)
        console.log(`varian: ${this.varian}, SN: ${this.sn}, Door: ${this.door}, Seat: ${this.seat}, Tyre: ${this.tyre}, Years: ${this.year}, Warranty: ${this.guarantee} years`);

    }
}

class Rush extends Car {
    constructor() {
        super(5, 5 + " " + "seater");
        this.varian = "Rush";
        this.sn = this.serialNumber();
        this.year = 2022;
        this.guarantee = Math.round(Math.random() * 10);
    }

    callRush() {
        console.log(`varian: ${this.varian}, SN: ${this.sn}, Door: ${this.door}, Seat: ${this.seat}, Tyre: ${this.tyre}, Years: ${this.year}, Warranty: ${this.guarantee} years`);
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    produce(year) {
        for (let i = 0; i < Math.round(Math.random() * 10); i++) {
            let mobilAgya = new Agya();
            let mobilRush = new Rush();
            this.cars.push(mobilAgya, mobilRush);
        }
    }

    guaranteeSimulation(simulationYear) {
        this.cars.forEach(item => {
            let masaAktif = item.year + item.guarantee;
            if (masaAktif > simulationYear) {
                console.log("Jaminan sudah expired");
            } else {
                console.log(`varian: ${item.varian}, SN: ${item.sn}, Door: ${item.door}, Seat: ${item.seat}, Tyre: ${item.tyre}, Years: ${item.year}, Warranty: ${item.guarantee} years`);
            }
        });

    }
}

const toyota = new CarFactory();
toyota.produce(2020);
toyota.guaranteeSimulation(2025);