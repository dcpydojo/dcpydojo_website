

  // A $( document ).ready() block.
$( document ).ready(function() {
      $(".button-collapse").sideNav();



        $('input#ajax_form').on('click', function() { 
            console.log("form submitted!"); 

            var name = $('input[name="email"]').val();
            var csrf_token = $("input[name='csrfmiddlewaretoken']").val()


            var post_data = {        'name': name, 

                      'csrfmiddlewaretoken': csrf_token,
                           };

            console.log( post_data );
            event.preventDefault();
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

                };

});