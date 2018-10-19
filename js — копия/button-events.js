

$(document).ready(function(){
function add_remove_select_line(add,remove='.remove',duplicate,in_block,custom_select='.custom-select-w3',select_selected='.select-selected'){
    $(add).on('click', function(){
      let $cloned = $(duplicate).eq(0).clone()
      $cloned.find(remove).on('click', function(){
         $(this).parent().remove();
      });

      console.log(duplicate)
      $cloned.appendTo($(in_block))
        initCustomSelect($cloned.find(custom_select).toArray())

        $cloned.find(custom_select).find(select_selected).each(function (el, a) {
          if (el % 2 === 0) {
            $(a).hide()
          }
        })

      });

      $(remove).on('click', function(){
         $(this).parent().remove();
      });
    
}


// function DelBlockGoal(button){
  $('.remove').on('click', function(){
    console.log($(this).closest("tr"))
   $(this).closest("tr").remove();
});
// }

add_remove_select_line('.add-1','.remove','#tmp-select-1 > div','.center-cell-1')
add_remove_select_line('.add-2','.remove','#tmp-select-2 > div','.center-cell-2')
// DelBlockGoal('.removed')

 $('.card-audience').on('click',function(){
  window.location ='D:/Emmanuel/Emmanuel-site/storeless-campaign.html#scroll'
 })

// scroll down when hash do you have 'scroll'
if (location.hash === '#scroll'){
    console.log('yes')

      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  } 
//end scroll down when hash do you have 'scroll'
});