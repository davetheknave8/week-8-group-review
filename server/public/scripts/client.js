console.log('js')

$(document).ready(onReady);

function onReady(){
    console.log('jq');
    $('#sendMessageButton' ).on('click', sendMessage);
}

function sendMessage(){
    event.preventDefault();
    console.log('Send Message');
    // get the user input
    // prepare object to send to server
    let objectToSend = {
        userName: $('#usernameIn').val(),
        messageText: $('#messageTextIn').val()
    }
    console.log('sending:', objectToSend);
    //send to server
    // clear just message text
    $('#messageTextIn').val('');
}