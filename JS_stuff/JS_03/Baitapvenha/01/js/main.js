function actionName() {
    var result;
    var full_name = document.getElementById("full_name").value;
    var arr = full_name.split(" ");
    document.getElementById("count").value = full_name.split(" ").length;
    document.getElementById("sayhi").value = "Xin chào " + arr[arr.length - 1];





}