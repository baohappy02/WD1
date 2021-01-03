$(document).ready(function () {
    $(".tabs").on("click", "li", function () {
        var tabText = $(this).text(); //Tab 1 | Tab 2 | Tab 3
        // Lấy chỉ số của tab để kết hợp với id
        var indexTab = tabText.substring(tabText.length - 1, tabText.length);
        $(".tab-list > div").hide();
        $("#content-" + indexTab).show();
        // #content-1
    });
});