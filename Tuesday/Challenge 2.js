function add(num1, num2) {
    let result = num1 + num2;
    if (result > 0) {
        result += result
        console.log(result)
        return result;
    } else if (result == 0) {
        console.log(result)
        return result;
    }
}

function execute(num1, num2, calculation) {
    count = 0;
    for (let i = 0; i < 5; i++) {
        add();
        count++;
    }
}

execute(1, 5, add);