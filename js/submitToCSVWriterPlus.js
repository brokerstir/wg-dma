function submitToCSVWriterPlus(e) {
    e.preventDefault();
    var URL = "https://q26daixsx8.execute-api.us-east-1.amazonaws.com";

        var currentDate = new Date()
        var dayOfMonth = currentDate.getDate()
        if ($("#security-input").val() != dayOfMonth) {
           alert ("Sorry, message cannot be sent.");
           return;
        }

    var first_name = $("#first-name-input").val();
    var last_name = $("#last-name-input").val();
    var email = $("#email-input").val();
    var data = {
      first_name : first_name,
      last_name : last_name,
      email : email
    };
    console.log(data)

    $.ajax({
     type: "PUT",
     url : "https://q26daixsx8.execute-api.us-east-1.amazonaws.com/live",
     dataType: "json",
     crossDomain: "true",
     contentType: "application/json; charset=utf-8",
     data: JSON.stringify(data),
     success: function () {
        alert ("Success!");
     },
     error: function () {
        alert ("Error!");
     }});
    }