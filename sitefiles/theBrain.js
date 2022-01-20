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



function checkEval(){
    //if dealer lower score greater than 9, stand.
   if(dealerStatus.tnum >=9){
      dealerStand();
   };
   ////if dealer lower score less than 9, do another evaluation
    
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



 