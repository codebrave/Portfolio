
$(document).ready(function(){

  var $windowT = $(window);
  var $fixedElmt = $("#nv");
  var fixedElmtOff = $fixedElmt.offset().top;

  var scroll_Timer = "";

  $windowT.scroll(function() {

    var newScrollPos = $windowT.scrollTop();
    clearInterval(scroll_Timer); 
    scroll_Timer  = setTimeout(function() {
      
      if (fixedElmtOff <  newScrollPos ) {
        $("#nv").fadeOut(100,function(){
          $fixedElmt.css('top', newScrollPos).fadeIn(200);        
        });
      } // end of if 
      
      else {
        $("#nv").fadeOut(100,function(){
          $fixedElmt.css('top', 0).fadeIn(200);
        });
      } // end of else  

  }, 75); // end of setTimeout function


  }); // end of $windowT.scroll
  
}); // end of $(document).ready
