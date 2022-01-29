$(document).ready(function() {
    $('#hit').click(function() {
        hitMe();
       if (playerStatus.bust == "no"){
           dealerEvalu();}
   });
});

$(document).ready(function() {
$('#stand').click(function() {
   standMe();
   if (playerStatus.bust == "no"){dealerEvalu();
   }
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
          checkBust("player");
         }
      };

};

function standMe(){
    disabl("stand");
    disabl("hit");
    playerStatus.stand = "yes";
    //check if dealer stand too
    if (dealerStatus.stand == "yes"){
       whoClose();
    }
    
};


function disabl(eth){
 if (eth == "stand") {
    $('#stand').prop('disabled', true);
 }
 else if(eth == "hit"){
    $('#hit').prop('disabled', true);
 }
 else if (eth == "redeal"){
   $('#reset').prop('disabled', true)

  }
};

function enabl(eth){
    if (eth == "stand") {
        $('#stand').prop('disabled', false);
     }
     else if(eth == "hit"){
        $('#hit').prop('disabled', false);
     }
     else if (eth == "redeal"){
        $('#reset').prop('disabled', false)
     }
};

function giveAcard2(who){
   if (who == "player"){
      var roll = Math.floor(Math.random() * cardDeck.length);
      playerhand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
     
      //update values
      playerStatus.tnum +=  cardDeck[roll].eval;
      playerStatus.bnum += cardDeck[roll].altEval;
      //update visual values
      playerScoreShowOnly();
     //remove card from deck
      cardDeck.splice(roll,1,);     
      //update cards visable on site
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
      if(playerStatus.tnum  > 21){
         disablePlayer();
        lose();
         playerStatus.bust = "yes";
         alert("Player Busts");
        
      }

   }else if (who == "dealer"){
      if(dealerStatus.tnum > 21){
         disablePlayer();
         dealerStatus.bust = "yes";
         win();
      }
   }
};