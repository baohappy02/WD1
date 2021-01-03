function actionName() {
    var numbers = document.getElementById("numbers").value;
    var str_numbers = numbers.split(" ");
    document.getElementById("max").value = num_max(str_numbers);
    document.getElementById("sum_integer").value = sum_integer(str_numbers);
    document.getElementById("old_number").value = old_first(str_numbers);
    document.getElementById("old_max").value = old_max(str_numbers);
}

function num_max(numbers) {
    console.log(numbers);
    return Math.max(...numbers);
}

function sum_integer(numbers) {

    var number_integer = [],
        sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            number_integer.push(numbers[i]);
        }
    }

    if (number_integer.length > 0) {
        for (var i = 0; i < number_integer.length; i++) {
            sum += parseInt(number_integer[i]);
        }
    }

    return sum;
}

function old_first(numbers) {

    var number_integer = [],
        first = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            number_integer.push(numbers[i]);
        }
    }

    if (number_integer.length > 0) {
        first = number_integer[0];
    }

    return first;
}

function old_max(numbers) {

    var number_integer = [],
        number_max = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            number_integer.push(numbers[i]);
        }
    }

    if (number_integer.length > 0) {
        number_max = num_max(number_integer);
        console.log("number_max", number_integer);
    }

    return number_max;
}