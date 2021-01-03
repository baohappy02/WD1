$(document).ready(function () {
    $("ul.menu.main-menu > li").on("click", function (e) {
        e.preventDefault();
        $("ul.menu.main-menu > li").removeClass("active");

        $(this).addClass("active");
    });

    $(".menu.sub-menu > li").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
    });
});