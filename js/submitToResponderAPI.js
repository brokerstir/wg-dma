function submitToResponderAPI(e) {
    e.preventDefault();
    var URL = "https://33tey7z4r7.execute-api.us-east-1.amazonaws.com";

        var currentDate = new Date()
        var dayOfMonth = currentDate.getDate()
        if ($("#security-input").val() != dayOfMonth) {
           alert ("Sorry, message cannot be sent.");
           // document.getElementById("contact-form-holder").style.display = "none";
           // document.getElementById("message-not-sent").style.display = "block";
           // setTimeout(function() {
           //     document.getElementById("contact-form-holder").style.display = "block";
           //     document.getElementById("message-not-sent").style.display = "none";
           // }, 3000);
           return;
        }

    var name = $("#name-input").val();
    var phone = $("#phone-input").val();
    var email = $("#email-input").val();
    var desc = $("#message-input").val();
    var data = {
      name : name,
      phone : phone,
      email : email,
      desc : desc
    };

    $.ajax({
     type: "POST",
     url : "https://33tey7z4r7.execute-api.us-east-1.amazonaws.com/live",
     dataType: "json",
     crossDomain: "true",
     contentType: "application/json; charset=utf-8",
     data: JSON.stringify(data),
     success: function () {
       // alert ("Message Sent. Thanks!");
       // clear form and show a success message
       // document.getElementById("contact-form").reset();
       // document.getElementById("contact-form-holder").style.display = "none";
       // document.getElementById("message-sent").style.display = "block";
       // document.getElementById("submit-button").style.display = "none";
       // document.getElementById("success-alert").style.display = "block";
       setTimeout(function() {
         window.location.replace("https://woogem.com");
       }, 2000);
     },
     error: function () {
       // document.getElementById("warning-alert").style.display = "block";
       // show an error message
       // alert ("An error ocurred. Message not sent. Call us at 918-732-9079.");
     }});
    }