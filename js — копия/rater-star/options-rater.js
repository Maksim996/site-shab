//https://github.com/auxiliary/rater  - Documentations
$(document).ready(function(){
var options = {
    max_value: 5,
    step_size: 0.5,
    // initial_value: 0,
    // selected_symbol_type: 'utf8_star', // Must be a key from symbols
    // cursor: 'default',
    // readonly: false,
    // change_once: false, // Determines if the rating can only be set once
    // ajax_method: 'POST',
    // url: 'http://localhost/test.php',
    // additional_data: {} // Additional data to send to the server
}

$(".rate").rate(options);
});