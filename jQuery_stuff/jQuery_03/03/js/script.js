$(document).ready(function() {
    $("#login-form").validate({
        rules: {
          username: "required",
          lastname: "required",
          password: {
            required: true,
            minlength: 4
          }
        },
    
        messages: {
          username: "Hãy nhập tài khoản của bạn",
          password: "Hãy nhập mật khẩu của bạn",
          password: {
            required: "Hãy nhập mật khẩu!",
            minlength: "Mật khẩu phải có ít nhất 4 kí tự"
          }
        },
        submitHandler: function(form) {
          form.submit();
        }
    });
});
   
