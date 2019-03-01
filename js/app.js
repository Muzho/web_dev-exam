$(document).ready(function(){

  // posting to the restful api
  $('#nums_form').submit(function (evt) {
    evt.preventDefault()

    // getting values entered by user
    let num1 = parseInt($('input[name=num1]').val());
    let num2 = parseInt($('input[name=num2]').val());
    let opn = $( "#operand option:selected" )[0].getAttribute("value");

    let userData = {
      'opd1': num1,
      'opd2': num2,
      'opn': opn
    };

    console.log(typeof userData);

    // process the form
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: 'backend/mock-backend.js', // the url where we want to POST
        data: userData, // our data object
        dataType: 'json', // what type of data do we expect back from the server
        encode: true,
        processData: false,
        contentType: 'application/json'
    }).done(function(data) {
      console.log(data);
    }).fail(function(data){
      // show any errors from the server
      console.log('Something went wrong on the server');
      console.log(data);
    });
  });
});
