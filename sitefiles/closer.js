function whoClose(){
    //make sure that both have not busted
    if (dealerStatus.bust == "yes" && playerStatus.bust == "yes") 
    {
      //do nothing
    }
    else if (dealerStatus.bust == "no" && playerStatus.bust == "no") 
      { 
       playerFinal();
       dealerFinal();
       //then i evaluate those values
       evaluateFinal();
      }
  };

  //decide if i should evaluate either the bottom or the top number
  // when determining who is closer

function playerFinal(){
    var playerHigh = playerStatus.bnum;
    if (playerHigh <= 21)
    {
        usePlayerBN();
    }
    else if (playerHigh < 21){
        usePlayerTN();
    }
};

//set the what will be evaluated (playz) to the same value as the bottom number
function usePlayerBN(){
    playerStatus.playz = playerStatus.bnum;
};

//if the bottom number for the player is more than 21, and they havent busted, 
////set the what will be evaluated (playz) to the same value as the top number
function usePlayerTN(){
    playerStatus.playz = playerStatus.tnum;
}


//do the same for the dealer


function dealerFinal(){
    var dealerHigh = dealerStatus.bnum;
    if (dealerHigh <= 21)
    {
        useDealerBN();
    }
    else if (dealerHigh < 21){
        useDealerTN();
    }
};

//set the what will be evaluated (dealz) to the same value as the bottom number
function useDealerBN(){
    dealerStatus.dealz = dealerStatus.bnum;
};

//if the bottom number for the dealer is more than 21, and they havent busted, 
////set the what will be evaluated (dealz) to the same value as the top number
function useDealerTN(){
    dealerStatus.dealz = dealerStatus.tnum;
};

///

function  evaluateFinal(){
//win lose or tie
var playerScore = playerStatus.playz -21;
var dealerScore = dealerStatus.dealz -21;

    if(playerScore == dealerScore)
    {
    //tie
    alert("tie");
    }else if (playerScore > dealerScore)
    {
    alert("win");
    }
    else if(playerScore < dealerScore)
    {
    alert("lose");
    }
};

