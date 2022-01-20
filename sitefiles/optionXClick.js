$(document).ready(function() {
    $('#hit').click(function() {
        hitMe();
        //dealerEvalu();
   });
   $('#stand').click(function() {
      standMe();
      //dealerEvalu();
   });
});


function hitMe(){
   if (playerStatus.stand != 
      "yes")
      {
         checkBust("player");
         if (playerStatus.bust != 
            "yes")
         {
          giveAcard2("player");
         }
      };

};

function standMe(){
    disabl("stand");
    disabl("hit");
    playerStatus.stand = "yes";
    
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

function giveAcard2(who){
   if (who == "player"){
      var roll = Math.floor(Math.random() * cardDeck.length);
      playerhand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
      cardDeck.splice(roll,1,);
      viewPlayerHand();
   }else if(who == "dealer"){
      var roll = Math.floor(Math.random() * cardDeck.length);
        dealerhand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
        cardDeck.splice(roll,1,);
        CoverDealerPartialHand();
        revealDealerPartialHand();
   }
}

function checkBust(who)
{
   if (who == "player"){
      if(playerStatus.bnum  > 21){
         disablePlayer();
         playerStatus.points -= 1;
         playerStatus.bust = "yes";
         
      }

   }
}