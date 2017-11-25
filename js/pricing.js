
//the following controls the background changing functionality attached to the navbar both on-scroll and at the top
$(document).ready(function() {

    $('main #packages .plan .panel-body ul li').prepend('<i class="fa fa-dot-circle-o fa-fw"></i>')
    
    $('main #packages .plan .panel-footer button').attr('data-target', '#request_modal');
    $('main #packages .plan .panel-footer button').attr('data-toggle', 'modal');
})
