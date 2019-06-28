console.log('js')

$(document).ready(onReady);

function onReady(){
    console.log('jq');
    $('#sendMessageButton' ).on('click', sendMessage);
}

function getMessages(){
    //ajax call to get messages
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then( function( response ){
        console.log('Back from GET with:', response);
        //empty target element
        let el = $( '#messagesOut');
        el.empty()
        //loop through response
        for(let currentObject of response){
            el.append(`<li>Username: ${currentObject.userName} Message: ${currentObject.messageText}</li>`)
        }
        // append each message to output element
    }).catch( function(error){
        alert( 'Error retrieving messages:', error);
    })
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
    $.ajax({
        method: 'POST',
        url: '/messages',
        data: objectToSend
    }).then( function(response){
        console.log('Back from POST with:', response);
        getMessages();
        // clear just message text is posted
        $('#messageTextIn').val('');
    }).catch( function(error){
        alert('Error posting message: ', error);
    })
}