

$(document).ready(function($){
	var
    BlockButton=$('.button-select')
	active='button-active'
	IconSelect='icon-minus'
 
  BlockButton.click(function(){
  	$(this).toggleClass(active);	
  	$(this).find("i").toggleClass(IconSelect);	
  });

});

