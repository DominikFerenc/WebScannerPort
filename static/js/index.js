/*$('#btn').click(function() {
    var ip_host = $('#input_ip').val();
    alert('Enter the ajax code');  
    //var l_port = $('#lowest_input').val(); 
    //var m_port = $('#max_port').val; 
    console.log("jsopn ", JSON.stringify(ip_host))

    console.log(ip_host);
    $.ajax({ 
        url: "/index",
        data: $('#input_ip').serialize(), 
        //data:  JSON.stringify(ip_host),
        //data: json,
        //data: {'data': ip_host}, 
        type: 'POST',
        contentType: 'application/json',
        async: true,
        success: function(data) {
            console.log('Response: ', data);
            //document.write(data); 
            //unblockInput(data)
            console.log(data.ping)
            alert("glicz gliczerm cyberchuja pogania", data); 
            unblockInput(data.ping)
            
        },
        error: function(error) {
            console.log('Error', error);  
        }    
     });
});*/
 
