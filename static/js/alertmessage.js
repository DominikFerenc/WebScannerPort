$(document).ready(function() {
    console.log("im'here"); 
    $('.close_btn').click(function(){
        console.log("click"); 
        $('.error_notification').animate({'right':'50vh'},500,function(){
            $('.error_notification').fadeOut('fast');
        });
    });
}); 