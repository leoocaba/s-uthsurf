$(function() {
    var links = $('ul li a').click(function() {
        $(this).closest('ul').find('a.activo').removeClass('activo');
        $(this).addClass('activo');
    });
});


$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


// Fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json));

fetch('')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });