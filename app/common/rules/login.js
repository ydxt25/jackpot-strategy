/**
 * Created by roeehershko on 1/30/16.
 */
(function () {
       widgetApp.validator.addRule('login', {
           rules: {
               password: {
                   required: true
               },
               email: {
                   required: true,
                   email: true
               }
           },
           messages: {
               email: "Please enter a valid email address",
           }
       });
}());