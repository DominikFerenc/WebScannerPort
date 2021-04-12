function unblockInput(ping){
    console.log("ping: ", parseInt(ping)); 
        if (ping == 0){
            $('#lowest_input, #maximum_input, #btn_2').removeAttr("disabled") == true; 
            $('#lowest_input, #maximum_input').removeClass('inputs_not_allowed'); 
            $('#btn_2').removeClass('btn_not_allowed'); 
            $('#info').html('The device is available!').css('color', 'green');
        } else if (ping == 1) { 
            $('#lowest_input, #maximum_input, #btn_2').attr("disabled", "disabled") == true;
            $('#lowest_input, #maximum_input').addClass('inputs_not_allowed'); 
            $('#btn_2').addClass('btn_not_allowed'); 
            $('#info').html("The device isn't available.").css('color','red'); 
        } else {
            $('#info').html('')
        } 
};

    
