$(document).ready(function() {
  $(".tabs").on("click", "li", function() {
    $(this).toggleClass("yellow");
  });
});