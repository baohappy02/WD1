$(document).ready(function () {
    $(".panel .panel-title").on("click", function () {
        $(".panel .panel-title").parent(".panel").removeClass('active');
        if ($(this).parent(".panel").hasClass('active')) {
            $(this).parent(".panel").removeClass('active');
        } else {
            $(this).parent(".panel").addClass('active');
        }
    });
});