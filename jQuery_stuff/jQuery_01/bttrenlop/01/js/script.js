$(document).ready(function() {
    var listfoodchoice1 = [
        "Bún đậu mắm tôm",
        "Trứng vịt lộn",
        "Cơm chiên dương châu",
        "Thịt kho gừng",
        "Cua rang me"
    ];
    var listfoodchoice2 = [
        "Tôm hùm",
        "Cua alaska",
        "Bánh cuốn",
        "Bánh tráng nướng",
        "Tàu hủ nhồi thịt"
    ];

    $("button").click(function (){
        var listOrder = $("#list-order");
        var rand = random();
        // listOrder.children().remove();
        if(rand == 1) {
            listOrder.html(arrayList(listfoodchoice1));
            // listOrder.append(arrayList(listfoodchoice1));
        } else {
            listOrder.html(arrayList(listfoodchoice2));
            // listOrder.append(arrayList(listfoodchoice2));
        }
    });

});


    function random() {
        var random = Math.floor(Math.random() * 2) + 1;
        return random;
    }

    function arrayList(array) {
        var result = "";
        array.forEach((item) => {
            result += "<li>" + item + "</li>";
        });
        return result;
    }


