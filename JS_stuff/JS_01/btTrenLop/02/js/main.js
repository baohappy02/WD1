function phuongTrinhBac2() {
    var number_a, number_b, number_c, delta, result;

    number_a = document.getElementById("number_a").value;
    number_b = document.getElementById("number_b").value;
    number_c = document.getElementById("number_c").value;
    delta = getDelta(parseInt(number_a), parseInt(number_b), parseInt(number_c));
    if (delta < 0) {
        result = "Phương trình vô nghiệm";
    } else if (delta == 0) {
        var rs = -number_b / 2 * number_a;
        result = "Phương trình có nghiệm kép x1 = x2 = " + rs;
    } else {
        var x1 = -number_a - Math.sqrt(delta) / 2 * number_a;
        var x2 = -number_a + Math.sqrt(delta) / 2 * number_a;
        result = "Phương trình có 2 nghiệm phân biệt X1 = " + x1 + "; X2 = " + x2;
    }

    document.getElementById("result").value = result;
}

function getDelta(a, b, c) {
    var delta = 0;

    delta = Math.pow(b, 2) - (4 * a * c);

    return delta;
}