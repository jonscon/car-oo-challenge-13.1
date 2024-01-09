class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        // call parent constructor with (make, model, year)
        super(make, model, year);
        this.numWheels = 4; // Every Car instance will have 4 wheels
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2; // Every Motorcycle instance will have 2 wheels
    }

    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(vehicle) {
        if (this.vehicles.length === this.capacity) {
            return "Sorry, we're full.";
        } 
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        this.vehicles.push(vehicle);
        return "Vehicle added!";
    }
}