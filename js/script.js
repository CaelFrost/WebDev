/* Author:

*/
$(document).ready(function() {
   $('#red,#blue,#green,#yellow').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('#red,#blue,#green,#yellow').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('#red,#blue,#green,#yellow').click(function() {
       $(this).toggle(1000);
   }); 
});




