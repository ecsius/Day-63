$(document).ready(function(){
    $('.search-icon').on('click', function(){
        $('.search-input').toggleClass('active');
    });

    $('.menu-icon').on('click', function() {
        $('.panel').toggleClass('show-menu');
        $('.menu').toggleClass('active');
    });
})