$(document).ready(function(){


$('.button-print').on('click',function(){
	let morelink=$(this).parents('.card-question-content').find('.morelink')
		print_page=$(this).parents('.card-question');
	if(!morelink.hasClass('less')){
		morelink.trigger('click')

	} setTimeout(function(){
		print_page.print({
    		noPrintSelector : ".no-print",
		});
	},170)
	

	
	
})




});