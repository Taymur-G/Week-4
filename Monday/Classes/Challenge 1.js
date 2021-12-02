class CarType {
    constructor(manufacturer, model, colour) {
        this._manufacturer = manufacturer,
            this._model = model,
            this._colour = colour,
            this.speed = 1,
            this.turning = "Straight",
            this.beeping = false
    }

    get manufacturer() {
        return `Manufacturer: ${this._manufacturer}`;
    }

    get model() {
        return `Model: ${this._model}`;
    }

    get colour() {
        return `Colour: ${this._colour}`;
    }

    accelerate() {
        this.speed++;
    }

    brake() {
        this.speed -= 1;
    }

    turningLeft() {
        this.turning = "Turning Left";
    }

    turningRight() {
        this.turning = "Turning Right";
    }

    beeping() {
        this.beeping = "BEEEEEP!!!";
    }
}

let trial = new CarType("Japan", "Tree", "Chrome Purple")

console.log(trial.manufacturer);
console.log(trial.model);
console.log(trial.colour);
trial.accelerate();
console.log(trial.speed);
trial.brake();
console.log(trial.speed);
trial.turningLeft();
console.log(turning);
