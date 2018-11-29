// alert('Wassup')

// Jquery for ajax
$('button').click(() => {
    let name = $('#name').val();
    let email = $('#email').val();
    let userObject = {
        name, 
        email
    };

    $.ajax({
        type: 'POST',
        url: '/contact-form',
        data: userObject
    })
    .then(res => {
        $('/contact-form').text(res)
    })
});

