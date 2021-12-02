const prompt = require('prompt-sync')();

class Pet {
    constructor() {
        this.age = 0,
            this.growthrate = 1,
            this.hunger = 100,
            this.thirst = 100,
            this.happiness = 10,
            this.totalDistance = 0
    }

    stats() {
        console.log(`\nType: ${this.type}\nName: ${this.name}\nAge: ${this.age}\nHunger: ${this.hunger}\nThirst: ${this.thirst}\nHappiness: ${this.happiness}\n`);
    }

    feed() {
        this.hunger += 10;
    }

    drink() {
        this.thirst += 10;
    }

    play() {
        this.happiness += 3;
        this.hunger -= 20;
        this.thirst -= 20;
    }

    walk() {
        this.happiness += 1;
        this.hunger -= 10;
        this.thirst -= 10;
        let distance = Math.floor(Math.random * 4 + 1);
        this.totalDistance += distance;
    }

    exercise() {
        this.happiness += 1;
        this.hunger -= 20;
        this.thirst -= 20;
    }

}

class Cat extends Pet {
    constructor(hunger, type, alias) {
        super(hunger)
        hunger = 5,
            this.type = species,
            this.name = alias
    }

    get species() {
        return `${this.type}`;
    }

    get alias() {
        return `${this.name}`;
    }
}

function _type() {
    while (true) {

        let newType = prompt("Cat Dog Rabbit Enter type of pet: ");
        let check = prompt("Are you sure?: ");

        if (check.toLowerCase() == "yes") {
            rettype = newType;
            return rettype;

        } else if (check.toLowerCase() == "no") {
            console.log("Check: No");
        }
    }
}

function _name() {
    while (true) {
        let newName = prompt("Enter name: ");
        let check = prompt("Are you sure?: ")

        //Name Check (Yes)

        if (check.toLowerCase() == "yes") {
            retname = newName;
            return retname;

            // Name Check (No)

        } else if (check.toLowerCase() == "no") {
            console.log("Check: No");
        }
    }
}

let type = _type();
let name = _name();
let decrease = 1;
let pet;

while (true) {
    pet.hunger -= decrease;
    pet.thirst -= decrease;
    console.log(pet.hunger);
    let action = prompt("What do you want to do? (help): ");
    switch (action.toLowerCase()) {

        case "help":
            console.log("\nFeed\nDrink\nPlay\nWalk\nStats\n");
            break;

        case "stats":
            pet.stats();
            break;

        case "feed":
            pet.feed()
            console.log(`Hunger: ${pet.hunger}`);
            break;

        case "drink":
            pet.drink()
            console.log(`Thirst: ${pet.thirst}`);
            break;

        case "play":

            pet.play()
            console.log(`Hunger: ${pet.hunger}`);
            console.log(`Thirst: ${pet.thirst}`);
            break;

        case "walk":

            pet.walk()
            console.log(`Distance Travelled: ${pet.distance}`);
            console.log(`Hunger: ${pet.hunger}`);
            console.log(`Thirst: ${pet.thirst}`);
            break;

        case "exercise":

            pet.walk()
            console.log(`Exercised for 1 hour.`);
            console.log(`Hunger: ${pet.hunger}`);
            console.log(`Thirst: ${pet.thirst}`);
            break;

        default:
            break;
    }
}
