
// on click append the input to the list above.
    $('button').click(function() {
        var skillsList = $('#input').val();
        $('#list').append('<li>' + skillsList +'</li>');
    });

// on click of the remove box, delete that item from the list.

$(document).on('dblclick', 'li', function(){
    $(this).fadeOut('slow');
});