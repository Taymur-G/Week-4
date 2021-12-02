function display() {
    console.log("Hello Code Nation");
}

function loop(display) {
    count = 0;
    for (let i = 0; i < 5; i++) {
        display();
        count++;
    }
}

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// console.log(a);

// setTimeout(() => {
//     console.log(b);
// }, 2000);

// setTimeout(() => {
//     console.log(c);
// }, 0);

// console.log(d);

let users = ['dan', 'ben', 'stuart']

const addUser = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(username);
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject('Oops there has been an error.')
            }
        }, 2000);
    });
}

const getUsers = () => {
    setTimeout(() => {
        console.log(users);
    });
}

addUser('Charlie').then(getUsers).catch((err) => { console.log(err) });