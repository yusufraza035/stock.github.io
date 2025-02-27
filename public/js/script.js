//submit login btn and go dashboard
$(document).ready(function(){
    
    $("#submit").click(function(){
        var email = $("#username").val();
        var password = $("#password").val();
        // Checking for blank fields.
        if( email =='' || password ==''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill all fields!",
                });
        }else {
         location.href = "dashboard.html";
        }
    });
});
