// Show Hide Password

$(document).ready(function(){
    $('#icon-show-hide-password').on('click', function(){
        var passwordField = $('#password-HideShow');
        var passwordFieldType = passwordField.attr('type');
        if(passwordFieldType == 'password')
        {
            passwordField.attr('type', 'text');
            $('#icon-show-hide-password').toggleClass('icon-eye-blocked');
        }
        else
        {
            passwordField.attr('type', 'password');
            $('#icon-show-hide-password').toggleClass('icon-eye-blocked');
        }
    });

//end Show Hide Password
// conditions trigger but help
    $('.modal-conditions-trigger-but-help').on('click', function(){
        var placeholderHelp = $('.placeholder-help');
        if(placeholderHelp.hasClass() !== 'active-show')
        {       
           placeholderHelp.toggle();
        } 
    });
    $(document).on('click', function(e) {
        var placeholderHelp = $('.placeholder-help');
       if (!$(e.target).closest(".modal-conditions-trigger-but-help").length) {
       placeholderHelp.hide();
    }
        e.stopPropagation();
    });

// end conditions trigger but help
    $('.modal-conditions-trigger-but-Yes').on('click', function(){
        $('.duration-enter-number-block').slideDown(500);
    });
    $('.modal-conditions-trigger-but-No').on('click', function(){
        $('.duration-enter-number-block').slideUp(500);
    });
    



    
});
// $('#my').animate({height:'+=200px'});