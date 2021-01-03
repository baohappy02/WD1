function actionName() {
    var full_name = document.getElementById("full_name").value; // Huá»³nh Ngá»c Tiá»n

    var arr_name = full_name.split(" ");
    if (arr_name.length >= 3) {
        var capitalize_name = "";
        document.getElementById("last_name").value = arr_name[0];
        document.getElementById("first_name").value = arr_name[2];
        document.getElementById("mid_name").value = arr_name[1];

        for (var i = 0; i < arr_name.length; i++) {
            capitalize_name += toCapitalize(arr_name[i]) + " ";
        }

        document.getElementById("cap_name").value = capitalize_name;
    } else {
        alert("ChÆ°a nháº­p há» tÃªn Äáº§y Äá»§");
        document.getElementById("full_name").focus();
    }

}

function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}