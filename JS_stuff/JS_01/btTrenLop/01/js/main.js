function calcMax() {
    var number_a, number_b, number_max;

    number_a = document.getElementById("number_a").value;
    // console.log(typeof number_a);

    number_b = document.getElementById("number_b").value;

    if (parseInt(number_a) > parseInt(number_b)) {
        number_max = parseInt(number_a);
    } else {
        number_max = parseInt(number_b); //3
    }

    document.getElementById("number_max").value = number_max;
}