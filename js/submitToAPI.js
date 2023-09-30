function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://vi5utyqa14.execute-api.us-east-1.amazonaws.com";

        var Namere = /[A-Za-z]{1}[A-Za-z]/;
        if (!Namere.test($("#name-input").val())) {
                     alert ("Name can not less than 2 char");
            return;
        }
        var mobilere = /[0-9]{10}/;
        if (!mobilere.test($("#phone-input").val())) {
            alert ("Please enter valid mobile number");
            return;
        }
        if ($("#email-input").val()=="") {
            alert ("Please enter your email id");
            return;
        }

        var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if (!reeamil.test($("#email-input").val())) {
            alert ("Please enter valid email address");
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
     url : "https://vi5utyqa14.execute-api.us-east-1.amazonaws.com/live",
     dataType: "json",
     crossDomain: "true",
     contentType: "application/json; charset=utf-8",
     data: JSON.stringify(data),
     success: function () {
       // clear form and show a success message
       alert("Message Sent - Thank You!");
       document.getElementById("contact-form").reset();
       window.location.replace("https://woogem.com");
     },
     error: function () {
       // show an error message
       alert("Something Went Wrong");
       document.getElementById("contact-form").reset();
     }});
    }