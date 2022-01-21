function disablePlayer(){
   disabl("hit");
   disabl("stand");
}

function playerWins(){
   alert("Player Wins");
}

function dealerBust(){
   if(dealerStatus.bust != "no"){}
   else
   {
      dealerStatus.bust = "yes";
      alert("Dealer bust");
      disablePlayer();
      playerWins();
   };
};

function dealerStand(){
   if(dealerStatus.stand != "no"){}
   else
   {
      dealerStatus.stand = "yes";
      alert("dealer choses to stand");
      checkPlayerStandToo();
   };
};

//929
//if dealer lower score greater than 9, stand
function dealerEvalu(){
 if(dealerStatus.bnum == 21){
   dealerStand();
 }else{
   checkAltEval();
 }
};

function checkAltEval(){
   if(dealerStatus.bnum < 21){
  checkAltEval2();
} else if (dealerStatus.bnum > 21){
   checkEval();
}
}

function checkAltEval2(){
   //if larger score less than or equal to 14, take a chance
   if (dealerStatus.bnum <= 14)
         {
         takeAchance()
          } //if larger score larger than 14, then stand
          else if (dealerStatus.bnum > 14)
            {
              dealerStand(); 
            };
 }

function checkEval(){
    //if dealer lower score greater than 9, stand.
   if(dealerStatus.tnum >=9){
      dealerStand();
   }else if(dealerStatus.tnum < 9)
   ////if dealer lower score less than 9, do another evaluation
    {
       checkEval2();
    }
}


function checkEval2(){
   //if dealer lower score less than 9 and less then 14 take a chance
   if (dealerStatus.tnum < 14){ takeAchance()
   }//this should never happen but just in case,
   // if dealer lower score less than 9 and greater than 14, stand
   else if (dealerStatus.tnum > 14){
     dealerStand(); 
   };
 }

 function takeAchance (){
   roll = Math.floor(Math.random() * 50) + 1;
   if (roll <= 26) {dealerHit();
    ;
   } else {
     dealerStand();}
 }

 function dealerHit(){
    alert("dealer hits");
   var roll = Math.floor(Math.random() * cardDeck.length);
   dealerhand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
   
     //update values
     dealerStatus.tnum +=  cardDeck[roll].eval;
     dealerStatus.bnum += cardDeck[roll].altEval;

     cardDeck.splice(roll,1,);

   //this is just visual
   revealDealerPartialHand();

 }

function bothStand(){
   //probably redundant
   disablePlayer();
   //revealDealerCards
   //whosCLose
}


function checkPlayerStandToo(){
   //if stand is not eq no, then do both stand
   if(playerStatus.stand != "no")
   {
      bothStand();
   }
   else if(playerStatus.bust != "no")
   {
      //there really is no difference in what happens in both stand if both stand or player busts
      bothStand();
   }
};



 