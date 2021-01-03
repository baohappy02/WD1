//tao o tron ngau nhien
var otrong = Math.floor(Math.random() * 4) + 1;
var CONST_TRUE = "Đúng";
var CONST_FALSE = "Sai";

function genNumber() {
    document.getElementById("result").classList.remove("green");
    document.getElementById("result").classList.remove("red");

    //tao day so ngau nhien
    var a = Math.floor(Math.random() * 100) + 1;
    var b, c, d;
    if (a > 97) a = a - 3;
    b = a + 1;
    c = a + 2;
    d = a + 3;
    document.getElementById("txt1").value = a;
    document.getElementById("txt2").value = b;
    document.getElementById("txt3").value = c;
    document.getElementById("txt4").value = d;
    //tao o tron ngau nhien
    //   var otrong = Math.floor(Math.random() * 4) + 1;
    if (otrong == 1) {
        document.getElementById("txt1").value = "";
    } else if (otrong == 2) {
        document.getElementById("txt2").value = "";
    } else if (otrong == 3) {
        document.getElementById("txt3").value = "";
    } else {
        document.getElementById("txt4").value = "";
    }
}

function calc(num_1, num_2, num_3, num_4, empty_space) {
    var result = "";
    switch (empty_space) {
        case 1:
            if (num_1 == num_2 - 1) {
                result = CONST_TRUE;
            } else {
                result = CONST_FALSE;
            }
            break;
        case 2:
            result = num_2 == num_3 - 1 ? CONST_TRUE : CONST_FALSE;
            // condition ? "káº¿t quáº£ ÄÃºng" : "Káº¿t quáº£ sai";
            break;

        case 3:
            result = num_3 == num_4 - 1 ? CONST_TRUE : CONST_FALSE;
            break;

        case 4:
            result = num_4 == num_3 + 1 ? CONST_TRUE : CONST_FALSE;
            break;

        default:
            break;
    }

    return result;
}

function actionName() {
    var num_1 = document.getElementById("txt1").value;
    var num_2 = document.getElementById("txt2").value;
    var num_3 = document.getElementById("txt3").value;
    var num_4 = document.getElementById("txt4").value;
    var result = calc(num_1, num_2, num_3, num_4, otrong);
    document.getElementById("result").innerHTML = result;
    if (result == CONST_TRUE) {
        document.getElementById("result").classList.remove("red");
        document.getElementById("result").classList.add("green");
    } else {
        document.getElementById("result").classList.remove("green");
        document.getElementById("result").classList.add("red");
    }
}