$(document).ready(function() {
  // Form submittion with new message in field with id 'm'
  $("form").submit(function() {
    var messageToSend = $("#m").val();
    //send message to server here?
    $("#m").val("");
    return false; // prevent form submit from refreshing page
  });

  /*global io*/
  let socket = io();

  socket.on("user count", data => {
    console.log(data);
  });

});
