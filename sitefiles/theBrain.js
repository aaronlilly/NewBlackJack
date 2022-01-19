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
  if(dealerStatus.bnum >=9){
     dealerStand();
  };
};

function bothStand(){
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
   //if above is false , and stand is eq no then check turn
   else{
      playerCheckTurn();
   };
};


function playerCheckTurn(){
   if (playerStatus.stand == "no"){
      if(playerStatus.bust == "no"){
         enabl("hit");
         enabl("stand");
      }
   }
}
// function dealerEvalu(){
// if(dealerStatus.bnum > 21){
//    dealerBust();
// }


      // console.log(dealerStatus.tnum)
      // console.log(dealerStatus.bnum)  
      // if (dealerStatus.bust = "no"){
      //    if(dealerStatus.stand = "no"{
      //       if(dealerStatus.bnum >= 14)
      //       dealerHit();
      //       else if (dealerStatus.bnum < 15){
      //          if(dealerStatus.bnum )
      //       }
      //    })
      // }
   
}

 