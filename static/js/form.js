$(document).ready(function() {
//$('#btn').click(function() {
    $('form').on('submit', function(event){
        $.ajax ({
            data : {
                ip : $('#input_ip').val(), 
            },
            type: 'POST', 
            url: '/host',
        success: function(data) {
            console.log('Response: ', data);
            unblockInput(data.ping); 
        },
        error: function(error) {
            console.log('Error', error); 
        }
        });
        event.preventDefault(); 
    }); 
});