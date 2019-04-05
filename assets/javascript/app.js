var correctanswers = 0;
var incorrectanswers = 0;
var unanswered = 0;




$( ".div2" ).hide();
 function start() { 
  $( ".div2" ).show();
  $( ".div4" ).hide();
  $( ".div3" ).show();  
  $( ".div0" ).hide();
  
 }
 
 $("#start").on("click", start)
 

