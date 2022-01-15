let playerhand = [];
let dealerhand = [];
 
function shuffleMe(){cardDeck.sort(function (a, b) {return Math.random() - 0.5;})};

function viewPlayerHand(){
        document.getElementById("playerHandViewer").innerHTML = "";
        for (var i = 0; i < playerhand.length; i++) {
                document.getElementById("playerHandViewer").innerHTML += playerhand[i].img };
}
function viewDealerPartialHand(){
        document.getElementById("dealerHandViewer").innerHTML = "";
        for (var i = 0; i < dealerhand.length; i++) {
                document.getElementById("dealerHandViewer").innerHTML += dealerhand[i].img };
}
       
function pushOneToPlayer(){
        var roll = Math.floor(Math.random() * cardDeck.length);
        playerhand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
        cardDeck.splice(roll,1,);
        viewPlayerHand()
}

function pushOneToDealer(){
        var roll = Math.floor(Math.random() * cardDeck.length);
        dealerhand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
        cardDeck.splice(roll,1,);
        viewDealerPartialHand();
}

function initDeal(){
        pushOneToPlayer();
        pushOneToDealer();
}

////reference
 ///playerHand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck

//[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
        //  cardDeck.splice(roll,1,);
