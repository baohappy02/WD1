$(document).ready(function() {
    $('.box .open').on('click', function() {
        $(".run").css("display", "block");
        $(this).hide();
    });
    $('.run .close').on('click', function() {
        $(this).parent().fadeOut();
        $(".box .open").show();
    });
    $('.run .closeX').on('click', function() {
        $(this).parent().fadeOut();
        $(".box .open").show();
    });
});
   
