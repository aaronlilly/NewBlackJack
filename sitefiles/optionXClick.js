$(document).ready(function() {
    $('#hit').click(function() {
        hitMe();
        dealerEvalu();
   });
   $('#stand').click(function() {
      standMe();
      dealerEvalu();
   });
});


function hitMe(){
   disabl("hit");
   disabl("stand");
};

function standMe(){
    disabl("stand");
    disabl("hit");
    
};


function disabl(eth){
 if (eth == "stand") {
    $('#stand').prop('disabled', true);
 }
 else if(eth == "hit"){
    $('#hit').prop('disabled', true);
 };
};

function enabl(eth){
    if (eth == "stand") {
        $('#stand').prop('disabled', false);
     }
     else if(eth == "hit"){
        $('#hit').prop('disabled', false);
     };
};