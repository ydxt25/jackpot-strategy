/**
 * Created by roeehershko on 1/30/16.
 */
(function () {
       widgetApp.validator.addRule('registration', {
           rules: {
               first_name: {
                   required: true,
                   minlength: 2,
                   maxlength: 30
               },
               last_name: {
                   required: true,
                   minlength: 2,
                   maxlength: 30
               },
               password: {
                   required: true,
                   minlength: 5,
                   maxlength: 16
               },
               email: {
                   required: true,
                   email: true
               },
               phone: {
                   required: true,
                   digits: true,
                   minlength: 7,
                   maxlength: 30
               }
           },
           messages: {
               password: {
                   required: "Please provide a password",
                   minlength: "Your password must be at least 5 characters long"
               },
               email: "Please enter a valid email address",
               agree: "Please accept our policy"
           }
       });
}());