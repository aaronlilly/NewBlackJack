function playerFinal(){
        var playerHigh = playerStatus.bnum;
         if (playerHigh <= 21)
            {
              usePlayerAltEval();
            }
            else if (playerHigh > 21)
              {
                chexPlayerEval()
              }
};


function evaluateFinal(){
            var dealerScore = parseInt($('#dealz').val())
            var playerScore = parseInt($('#playz').val())
           if (dealerScore == playerScore){ 
             alert("Tie!");
              showRedealButton ();
           }
           else if (dealerScore > playerScore) {
              $('#whoWon').html("Player Wins");
             revealDealerCards();
             win();
             }
           else if (dealerScore < playerScore) {
             $('#whoWon').html("Dealer Wins");
             revealDealerCards();
             lose();
             }
         }


         function whoClose(){
            //make sure that both have not busted
            if (dealerStatus.bust == "yes" && playerStatus.bust == "yes") 
            {
              //do nothing
            }
            else if (dealerStatus.bust == "no" && playerStatus.bust == "no") 
              { 
              //makes values in the divs according to the score of the dealer and player
               dealerFinal();
               playerFinal();
               //then i evaluate those values
               evaluateFinal();
              }
          };


function dealerFinal(){
            var dealerHigh = dealerStatus.bnum;
             if (dealerHigh <= 21)
                {
                  useDealerAltEval();
                }
                else if (dealerHigh > 21)
                  {
                    chexDealerEval()
                  }
};

function useDealerAltEval(){
    var dealerHigh =  dealerStatus.bnum;
    console.logdealerStatus.bnum;
     // 21 -= dealerHigh;
      dealerStatus.dealz += dealerHigh;
  }
  
  // if high score greater than 21, use the low score
  function useDealerEval(){
    var dealerLow =  dealerStatus.tnum;
    console.log(dealerStatus.tnum)
   // 21 -= dealerLow;
      dealerStatus.dealz += - dealerLow;
  };
  
  function playerFinal(){
    var playerHigh = parseInt($('#playScoreAltEval').val());
     if (playerHigh <= 21)
        {
          usePlayerAltEval();
        }
        else if (playerHigh > 21)
          {
            chexPlayerEval()
          }
    }
    
    //if playerHigh is greater 21 use hte lower score
    function chexPlayerEval(){
      var playerLow = playerStatus.tnum;
      
        if (playerLow <= 21){
          usePlayerEval();
        }
        else if (playerLow > 21){
          //if busted still want a value.
          useBustPlayer()
        }
    }

    
// var dealerHigh =  dealerStatus.bnum;
// //21 -= dealerHigh;

// dealerStatus.dealz += dealerHigh;
    
   //set a value if player bust to 21 
   function useBustPlayer(){
    playerStatus.playz = 21;
  };
    
    //use player alt/eval
    //if high score = or less than 21, use the high score.
    function usePlayerAltEval(){
      var playerHigh = playerStatus.bnum;
      console.log(playerStatus.bnum)
      //21 -= playerHigh;
       playerStatus.playz =+ playerHigh;
    };
    
    // if high score greater than 21, use the low score
    function usePlayerEval(){
      var playerLow = playerStatus.tnum;
      console.log(playerStatus.tnum)
      //playerLow -=21;
       // 21 -= playerLow;
         playerStatus.playz =+ playerLow;
    };


    function useDealerAltEval(){
      var dealerHigh =  dealerStatus.bnum -21;//yes
        dealerStatus.dealz += dealerHigh;
    };
     
///

function evaluateFinal(){
  var dealerScore = dealerStatus.dealz;
  var playerScore = playerStatus.playz;
 if (dealerScore == playerScore){ 
   alert("Tie!");
   //i got tie but its kinda broke
    //showRedealButton ();
 }
 else if (dealerScore > playerScore) {
    // $('#whoWon').html("Player Wins");
   //revealDealerCards();
   win();
   }
 else if (dealerScore < playerScore) {
   //$('#whoWon').html("Dealer Wins");
  // revealDealerCards();
   lose();
   }
}