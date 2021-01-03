$(document).ready(function () {
  $(".tabs").on("click", "li", function () {
    $(".btn").removeClass("yellow_active");
    $(this).addClass("yellow_active");
  });
});