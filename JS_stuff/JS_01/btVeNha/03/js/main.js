function sum() {
    var number_n = document.getElementById("number_n").value;
    var result = 1;
    for (var i = 1; i <= number_n; i++) {
        result += i;
    }

    document.getElementsByClassName("result")[0].innerHTML =
        " Tổng n = " + result + ",";
}

function check2chuso() {
    var number_n = document.getElementById("number_n").value;
    if ((number_n >= 10) && (number_n <= 99)) {
        result = number_n + " là số có 2 chữ số.";
    } else {
        result = number_n + " không phải là số có 2 chữ số.";
    }

    document.getElementsByClassName("result")[1].innerHTML = result;
}


function checksonguyento() {
    var number_n = document.getElementById("number_n").value;
    var flag = true;

    if (number_n < 2) {
        flag = false;
    } else {
        for (var i = 2; i < number_n - 1; i++) {
            if (number_n % i == 0) {
                flag = false;
                break;
            }
        }
    }

    if (flag == true) {
        result = number_n + " là số nguyên tố <br/>";
    } else {
        result = number_n + " không phải là số nguyên tố <br/>";
    }

    document.getElementsByClassName("result")[2].innerHTML = result;

}


function sum_element() {
    var number_n = document.getElementById("number_n").value;
    var sum = 0;
    while (number_n != 0) {
        sum += (number_n%10);
        number_n /= 10;
    }
    document.getElementsByClassName("result")[3].innerHTML = parseInt(sum);
}