function calcMax() {
    var number_a, number_b, number_max;

    number_a = document.getElementById("number_a").value;

    number_b = document.getElementById("number_b").value;

    number_c = document.getElementById("number_c").value;

    if ((parseInt(number_a) > parseInt(number_b)) && (parseInt(number_a) > parseInt(number_c))) {
        number_max = parseInt(number_a);
    } else if ((parseInt(number_b) > parseInt(number_c)) && (parseInt(number_b) > parseInt(number_a))) {
        number_max = parseInt(number_b);
    } else {
        number_max = parseInt(number_c);
    }

    document.getElementById("number_max").value = number_max;
}