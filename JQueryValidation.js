$.validator.addMethod( "alphanumeric", function( value, element ) {
  return this.optional( element ) || /^\w+$/i.test( value );
  }, "Letters, numbers, and underscores only please" );

$.validator.addMethod( "accountnumber", function( value, element ) {
  return this.optional( element ) || /^[0-9]{4}-[0-9]{4}-[0-9]{4}$/i.test( value );
  }, "Please enter valid account number" );

$.validator.addMethod( "username", function( value, element ) {
  return this.optional( element ) || /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test( value );
  }, "Please enter valid user name" );

$.validator.addMethod( "password", function( value, element ) {
  return this.optional( element ) || /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test( value );
  }, "Please enter valid user name" );

$.validator.addMethod( "startDate", function( value, element ) {
  return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/i.test( value );
  }, "Please enter valid start date" );

$(function () {
       
       var $registrationForm = $('#ValidationForm');
       if($registrationForm.length){
         $registrationForm.validate({
             rules:{
                 CustomerName: {
                     required: true,
                     maxlength: 20,
                     alphanumeric: true
                 },
                 AccountNo: {
                     required: true,
                     maxlength: 14,
                     accountnumber: true
                 },
                 UserName: {
                    required: true,
                    maxlength: 10,
                    minlength: 8,
                    username: true
                 },
                    Password: {
                    required: true,
                    password: true
                },
                    Confirm: {
                    required: true,
                    equalTo: '#password'
                },
                    StartDate: {
                    required: true,
                    startDate: true
              }
             },
             messages:{
                 CustomerName: {
                     required: 'Please enter Customer name'
                 },
                 AccountNo: {
                     required: 'Please enter Account number'
                 }
             },
             submitHandler: function(form) {
                var formData = {
                    CustomerName: $("#customerName").val(),
                    AccountNo: $("#accountNo").val(),
                    UserName: $("#userName").val(),
                    Password: $("#password").val(),
                    StartDate: $("#startDate").val()
                  };                 
                  

                  $.ajax({
                    type: 'POST',
                    url: '',
                    data: JSON.stringify(formData),
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    success: function () {
                      alert('form was submitted');
                    }
                  });
            }
         });
       }
  });

