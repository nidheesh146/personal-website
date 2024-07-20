$(document).ready(function(){
    $("#login").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
        },
        sname:{
            required:true,
            minlength:4
        },
        email:{
            required:true,
            
            email:true
        },
        password:{
            minlength:6
        },
        day:{
            required:true
        },
        gender1:{
            required:true
        }
       
        },
        messages:{
            fname:{
            required:"enter first name", 
            minlength:"enter atleast 4 characters"
            }
        }
    })

})