$(document).ready(function(){
    $('#btn').on('click', function() { 
        let ip_val;  
        let ip_pattern;
        ip_pattern = new RegExp('^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$','i');  
        ip_val = $('#input_ip').val(); 
        console.log("ip_val", ip_val)
        
        if (ip_pattern.test(ip_val)) {
            $('#icon').removeClass('fas fa-exclamation-circle').addClass('far fa-check-circle');
            $('#input_ip').removeClass('invalid input_text').addClass('valid');
            console.log(ip_val + " valid"); 
        } else {
            $('#icon').removeClass('far fa-check-circle').addClass('fas fa-exclamation-circle'); 
            $('#input_ip').removeClass('valid input_text').addClass('invalid'); 
            console.log(ip_val + " invalid"); 
        }

    })
 }); 


    
    
            
