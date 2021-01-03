function tinhGiaithua() {
    var number_n = document.getElementById("number_n").value;
    var result = 1;
    for (var i = 1; i <= number_n; i++) {
        result *= i;
    }
    document.getElementsByClassName("result")[0].innerHTML =
        number_n + " giai thừa = " + result;
}

function tinhSoChan() {
    var number_n = document.getElementById("number_n").value;
    var result = "";
    if (number_n % 2 == 0) {
        result = number_n + " là số chẵn";
    } else {
        result = number_n + " là số lẻ";
    }
    document.getElementsByClassName("result")[1].innerHTML = result;
}

function tinhSole() {
    var number_n = document.getElementById("number_n").value;
    var result = 0,
        arrOld = [];
    for (var i = 1; i <= number_n; i++) {
        if (i % 2 != 0) {
            arrOld.push(i);
        }
    }
    for (var i = 0; i < arrOld.length; i++) {
        result += arrOld[i];
        console.log(arrOld[i]);
    }
    document.getElementsByClassName("result")[2].innerHTML =
        "Tổng giá trị số lẻ là: " + result;
}

function tinhSoChinhPhuong() {
    var number_n = document.getElementById("number_n").value;
    var result = "";
    if (Math.sqrt(number_n) * Math.sqrt(number_n) == parseInt(number_n)) {
        result = number_n + " là số chính phương";
    } else {
        result = number_n + " không phải là số chính phương";
    }
    document.getElementsByClassName("result")[3].innerHTML = result;
}