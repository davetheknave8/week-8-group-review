console.log('js')

$(document).ready(onReady);

function onReady(){
    console.log('jq');
    $('#sendMessageButton' ).on('click', sendMessage);
}

function sendMessage(){
    event.preventDefault();
    console.log('Send Message');
}