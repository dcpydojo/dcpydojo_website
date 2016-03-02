

  // A $( document ).ready() block.
$( document ).ready(function() {
      $(".button-collapse").sideNav();



        $('form#ajax_form').submit(function (e) { 
            event.preventDefault();
            console.log("form submitted!"); 

            var email = $('input[name="email"]').val();
            var csrf_token = $("input[name='csrfmiddlewaretoken']").val()


            var post_data = {             'email': email, 
                            'csrfmiddlewaretoken': csrf_token,
                           };

            console.log( post_data );
            
            create_post(post_data);
            return false;

        });

            function create_post( post_data ) {
            console.log("create post is working!") // sanity check
            $.ajax({
                url : "slack/form/", // the endpoint
                type : "POST", // http method
                traditional: true,
                data : post_data , // data sent with the post request

                // handle a successful response
                success : function(data) { 
                    console.log("success"); // another sanity check
                    console.log(data);
                    console.log(data['ok']);
                // if ok == true
                    if (data['ok'] == true){
                        $('div#slack_request_form').append('<div class="chip"> \
                                Invite Sent  <i class="material-icons">close</i> </div>' 
                                );
                    
                        $('form#ajax_form').remove();
                    }
                    else {
                        $('div#slack_request_form').append('<p>' + 'Error: ' + data['error'] + '</p>');
                    }

                }
            });
        }

});