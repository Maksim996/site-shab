

$(document).ready(function($){
	var title=$("title").text();
		navbarNavAltMarkup=$('#navbarNavAltMarkup');
	switch(title) {
  	case 'Campaigns':  
  		$("a[name |='Campaigns']").addClass('active')
    	break;

  	case 'Shortcodes': 
  		$("a[name |='Shortcodes']").addClass('active')
   		break;

    case 'Help':  
    	$("a[name |='Help']").addClass('active')
    	break;

    case 'FAQ':  
    	$("a[name |='FAQ']").addClass('active')
    	break;
    case 'Contact Us':
    	$("a[name |='Contact Us']").addClass('active')
    	break;	
}
	

});

