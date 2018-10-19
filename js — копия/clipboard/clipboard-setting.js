let a=0;
function test(e){
	
	
	if ( e =='copy' && a==0){
			a = 1;
		    $('.HintCopy-block').animate({
		    opacity: 1,
		    left: "+=200",
		  	}, 1000, function() {

	  				$(this).delay(1000).animate({
					    left: "-=200", 
				  	},700)
				  	a=0;
				} 
			);

	    } 
}
new ClipboardJS('.button-copy-text').on('success', function(e) {
	test(e.action)
	e.clearSelection();
});
