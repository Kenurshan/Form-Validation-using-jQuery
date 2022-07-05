$(function(){
    $("form[name='registration']").validate({
        rules:{
            name:"required",

            email: {
                required: true,
                email: true
            },
            psw:{
                required: true,
                minlength: 5
            },
            conpsw: {
                required: true,
                minlength: 5,
                equalTo : "#pw"
            }
        },
        //error msg
        messages:{
            name:"Please enter your name",
            email: {
                require: "Please enter your email address",
                email:"please enter a valid email address"
            },
            psw: {
                required: "please provide the password",
                minlength : "Your password  must be consist of at least 5 characters"
            },
            conpsw: {
                required : "please re-enter the password",
                minlength : "Your password  must be consist of at least 5 characters",
                equalTo : "Please enter the same password as above"
            }
        }
    });

});