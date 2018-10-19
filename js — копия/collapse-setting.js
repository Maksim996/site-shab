$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".icon-cheveron-down").removeClass("icon-cheveron-donw").addClass("icon-cheveron-up");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".icon-cheveron-up").removeClass("icon-cheveron-up").addClass("icon-cheveron-down");
});