$(document).ready(function() {
    $('#reset').click(function() {
        resetTheGamez();
        disabl("redeal");
        
   });
});

function returnAllCards(){

    //playerhand 
    for (var i = 0; i < playerhand.length; i++) {
        cardDeck.push({"card":playerhand[i].card,"suit":playerhand[i].suit,"color":playerhand[i].color,"eval":playerhand[i].eval,"altEval":playerhand[i].altEval,"img":playerhand[i].img})
        playerhand.splice(0,playerhand.length);
    }
   //dealerhand
   for (var i = 0; i < dealerhand.length; i++) {
        cardDeck.push({"card":dealerhand[i].card,"suit":dealerhand[i].suit,"color":dealerhand[i].color,"eval":dealerhand[i].eval,"altEval":dealerhand[i].altEval,"img":dealerhand[i].img})
        dealerhand.splice(0,dealerhand.length);
   }
};


function reEnableOptions(){
        enabl("stand");
        enabl("hit");     
};

function resetTheGamez(){
    returnAllCards();
    playerStatus.reset();
    dealerStatus.reset();

    playerHandEvaluate();
    playerScoreShow();
   

    clearPH();
    clearDH();
    initDeal();
    youShouldntCheat();
    playerScoreShow();

    reEnableOptions();
};

