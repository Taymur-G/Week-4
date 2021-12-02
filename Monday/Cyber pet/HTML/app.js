class animal {
    constructor(alias, species, age) {
        this.name = alias,
            this.type = species,
            this._age = age,
            this.hops = 0,
            this.hunger = 100,
            this.thirst = 100,
            this.happiness = 0
    }
    get type() {
        return `${this.type}`
    }
    get name() {
        return `${this.name}`
    }
    get age() {
        return "never ask"
    }
    play() {
        this.happiness++
        this.thirst--
        this.hunger--
    }
    feed() {
        this.hunger++

    }
    drink() {
        this.thirst++
    }

}

let q = document.getElementById("q")
let btns = document.querySelectorAll(".btn")
let input = document.getElementById("input")
let game = document.getElementById("game")

function typeStart() {
    q.innerHTML = `what type of pet`
    for (let i = 0; i < btns.length; i++) {
        btns[0].innerHTML = "cat"
        btns[1].innerHTML = "dog"
        btns[2].innerHTML = "fish"
        btns[3].innerHTML = "rabbit"
        btns[i].addEventListener("click", () => {
            if (btns[i].id == 1) {
                q.innerHTML = `your pet will be a cat<br> are you sure?`
            } else if (btns[i].id == 2) {
                q.innerHTML = `your pet will be a dog<br> are you sure?`
            } else if (btns[i].id == 3) {
                q.innerHTML = `your pet will be a fish<br> are you sure?`
            } else if (btns[i].id == 4) {
                q.innerHTML = `your pet will be a rabbit<br> are you sure?`
            }
            typeCheck()

        })
    }
}
typeStart()
const typeCheck = () => {
    for (let i = 0; i < btns.length; i++) {
        btns[0].innerHTML = ""
        btns[1].innerHTML = "yes"
        btns[2].innerHTML = "no"
        btns[3].innerHTML = ""

        btns[i].addEventListener("click", () => {

            if (btns[i].innerHTML == "yes") {
                q.innerHTML = "type pet name"
            } else if (btns[i].innerHTML == "no") {
                typeStart()
            }
        })
    }
}

function name() {
    q.innerHTML = "type pet name"
}

