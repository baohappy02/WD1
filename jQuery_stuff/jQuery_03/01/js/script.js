$(document).ready(function() {
    $('form').on("click", ".submit",function() {
        var username = $("#username").val();
        var password = $("#password").val();
    
        if (username == "" || username.length < 4 || username != "admin") {
            $("#error").css('display','block').delay(10000);
        } 
        else {
            $("#succeed").css('display','block').delay(10000);;
        }
    
        if (password == "" || password.length < 4 || password != "admin"){
            $("#error").css('display','block').delay(10000);;
        }
        else{
            $('#succeed').css('display','block').delay(10000);;
        }
    });
});
   
