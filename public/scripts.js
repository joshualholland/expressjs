// alert('Wassup')

// Jquery for ajax
$('button').click((e) => {
    e.preventDefault();
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
        console.log(res)
    })
    window.location.href = '/formsubmissions'
});

