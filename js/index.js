$(document).ready(function() {
    //services icons
    $('#services .well h4').prepend('<i class="fa fa-dot-circle-o fa-fw skyblue"></i>');

    $('#services .well .bottom_icons').append('<i class="fa fa-diamond fa-sm green"></i>');
    $('#services .well .bottom_icons').append('<i class="fa fa-diamond fa-sm red"></i>');
    $('#services .well .bottom_icons').append('<i class="fa fa-diamond fa-sm blue"></i>');

    $('#services .well').on({
        "mouseenter": function() {
            $(this).addClass('focus');
        },
        "mouseleave": function() {
            $(this).removeClass('focus');
        }
    });

    //about - activities diamond icons
    $('#aboutus #why_us ul li h4').prepend('<i class="fa fa-diamond blue"></i>');
});