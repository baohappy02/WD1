$(document).ready(function() {
    $("#btnAddFirst").click(function() {
        $("#list-tag").prepend("<li>New item</li>");
    });
    $("#btnAddLast").click(function() {
        $("#list-tag").append("<li>New item</li>");
    });
    $("#btnRemoveFirst").click(function() {
        $("#list-tag li").first().remove();
    });
    $("#btnRemoveLast").click(function() {
        $("#list-tag li").last().remove();
    });
});
