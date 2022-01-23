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


         function whoClose (){
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
      21 -= dealerHigh;
      dealerStatus.dealz += dealerHigh;
  }
  
  // if high score greater than 21, use the low score
  function useDealerEval(){
    var dealerLow =  dealerStatus.tnum;
    21 -= dealerLow;
      dealerStatus.dealz += - dealerLow;
  }
  
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
      var playerLow = parseInt($('#playScoreEval').val());
        if (playerLow <= 21){
          usePlayerEval();
        }
        else if (playerLow > 21){
          //if busted still want a value.
          useBustPlayer()
        }
    }
    
    //set a value if player bust to 21
    function useBustPlayer(){
      $("#playz").val(21)
    }
    
    //use player alt/eval
    //if high score = or less than 21, use the high score.
    function usePlayerAltEval(){
      var playerHigh = parseInt($('#playScoreAltEval').val());
        $("#playz").val(21 - playerHigh);
    }
    
    // if high score greater than 21, use the low score
    function usePlayerEval(){
      var playerLow = parseInt($('#playScoreEval').val());
        $("#playz").val(21 - playerLow);
    }

// function whoCLose(){
//     //make sure that both have not busted
//     if (dealerStatus.bust == "yes" && dealerStatus.bust == "yes") 
//     {
//       //do nothing
//     }
//     else if (dealerStatus.bust == "no" && dealerStatus.bust == "no" )
//       { 
//       dealerFinal();
//       }
//   }
  
// function dealerFinal(){
//       if (dealerStatus.bnum == 21){
//         passThis(dealrStatus.bnum);
//       }
//       else if (dealerStatus.bnum < 21){
//           passThis(dealerStatus.bnum);
//       }
//       else if (dealerStatus.bnum > 21){
//           passThis(dealerStatus.tnum)
//       }
// };

// function passThis(dealers){
//     let playerDo = '';
//      if(playerStatus.bnum == 21){
//         let playerDo = playerStatus.bnum;
//      }
//      else if (playerStatus.bnum < 21){
//          let playerDo = playerStatus.bnum;
//      }
//      else if (playerStatus.bnum > 21){
//          let playerDo = playerStatus.tnum;
//      }
//      finalEvaluation(dealers,playerDo);
// };

// function finalEvaluation(dealers,players){
//     if (dealerStatus.bust == "no"){
//         if (playerStatus.bust == "no"){
//             if (dealers > players){
//                 dealerWins();
//             }else if (dealers < players){
//                 playerWins()
//             }
//         }
//     }
// };