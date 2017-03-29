var isEmail = function(email) {
  //Check if it's a valid email
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

// Submit via button
$('#submitButton').click(function(event) {
  event.preventDefault(); // Prevent reload
  submitEmail(); // Submit email
});

/******  On submit  ******/
var submitEmail = function() {
  var email = document.getElementById('email-input').value; // Get email input

  if (isEmail(email)) {
    submitValidEmail(email); // Valid email
  } else {
    alert("Please submit a valid email"); // Return error to user
  }

  // Prevent reload on form submit
  return false;
}

// https://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
var request;
var submitToGoogleForm = function(form){
    if (request) request.abort();

    var $form = $(form);
    var $inputs = $form.find("input, select, button, textarea");
    var serializedData = $form.serialize();

    // $inputs.prop("disabled", true);

    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyyzisBvUllhZ4v-37QOAh0d4fx_WocbL-BNyJhvHXUpsjXashe/exec",
        type: "post",
        data: serializedData
    });

    request.done(function (response, textStatus, jqXHR) {
      console.log("Success");
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    request.always(function () {
        // $inputs.prop("disabled", false);
    });

};

var submitValidEmail = function(email) {
  submitToGoogleForm($('#email-form'));
}
