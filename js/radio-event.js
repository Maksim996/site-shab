$(document).ready(function($){
	var

		RadioCheck=$('.radio-check'),
    active="radio-active",
    RadioBox1=$('.radio-box-1'),
    RadioBox2=$('.radio-box-2');
  
    RadioCheck.click(function(){
      var select =$(this).attr('name');
      if (select =='rad1'){
          if ($('.radio-box-2').hasClass(active)!== 'active'){
          
              $('.radio-box-2').removeClass(active);
              $('.radio-box-1').addClass(active);
      
            } 
            else {
            
              $('.radio-box-1').addClass(active);
            
            }

      }else if (select == 'rad2'){
          if ($('.radio-box-1').hasClass(active) !== 'active'){
          
              $('.radio-box-1').removeClass(active);
              $('.radio-box-2').addClass(active);
            
              
            } 
            else {
            
              $('.radio-box-2').addClass(active);
            
            }
      }
   
  });	
  

});

