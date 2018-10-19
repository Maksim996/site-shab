 document.addEventListener("DOMContentLoaded", function(event) {
        var buttons = document.querySelectorAll(".social_share");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                return JSShare.go(this);
            }, false);
        }
    });