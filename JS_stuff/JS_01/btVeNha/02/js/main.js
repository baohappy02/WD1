function phuongTrinhBac1() {
    var number_a, number_b, result;

    number_a = document.getElementById("number_a").value;
    number_b = document.getElementById("number_b").value;
    
    if (number_a != 0) {
        var x1 = - number_b / number_a;
        result = "Phương trình có nghiệm x = " + x1;
    } else if (number_b != 0 ) {
        result = "Phương trình vô nghiệm";
    } else {
        result = "Phương trình vô số nghiệm";
    }

    document.getElementById("result").value = result;
}