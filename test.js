$(function () {
    // Handler for .ready() called.
    $('#test').click(function () {
        $("#myDropdown").slideToggle(100);

    }
    )

   
  $('[data-toggle="tooltip"]').tooltip()

    // $('button').click(clickHandler)

    // function clickHandler() {
    //     var username = $('#username').val()
    //     var password = $('#pass').val()

    //     $('#message').html('Username:' + username + 'Password:' + password)
    // }

}); 