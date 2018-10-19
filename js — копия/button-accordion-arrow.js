
$('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().find('span').removeClass("button-accordion-down").removeClass("icon-plus").addClass("button-accordion-up").addClass("icon-cross");
})
$('.collapse').on('hidden.bs.collapse', function(){

	$(this).parent().find('span').removeClass("button-accordion-up").removeClass("icon-cross").addClass("button-accordion-down").addClass("icon-plus");
	
});