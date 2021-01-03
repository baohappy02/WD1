function actionName() {
  var numbers = document.getElementById("numbers").value;
  var str_numbers = numbers.split(" ");
  document.getElementById("place").value = num_max(str_numbers);
  document.getElementById("sum_odd").value = sum_odd(str_numbers);
  document.getElementById("odd_number").value = odd_first(str_numbers);
  document.getElementById("odd_max").value = odd_max(str_numbers);
}

function num_max(numbers) {
    console.log(numbers);
    return Math.max(...numbers);
}

function sum_odd(numbers) {

    var number_odd = [], sum = 0;
    for(var i = 0; i < numbers.length; i ++) {
      if(numbers[i] % 2 != 0) {
        number_odd.push(numbers[i]);
      }
    }

    if(number_odd.length > 0 ) {
      for(var i = 0; i < number_odd.length; i ++) {
        sum += parseInt(number_odd[i]);
      }
    }

    return sum;
}

function odd_first(numbers) {

    var number_odd = [], first = 0;
    for(var i = 0; i < numbers.length; i ++) {
      if(numbers[i] % 2 == 0) {
        number_odd.push(numbers[i]);
      }
    }

    if(number_odd.length > 0 ) {
      first = number_odd[0];
    }

    return first;
}

function odd_max(numbers) {

    var number_odd = [], number_max = 0;
    for(var i = 0; i < numbers.length; i ++) {
      if(numbers[i] % 2 != 0) {
        number_odd.push(numbers[i]);
      }
    }

    if(number_odd.length > 0 ) {
      number_max = num_max(number_odd);
      console.log("number_max", number_odd);
    }

    return number_max;
}
