let playerhand = [];
let dealerhand = [];




var coverCard =[{"img":'<img src ="./cards/covercard.png" id="coverCard" style="width: 106px;height:164px;">'}]; 
function shuffleMe(){cardDeck.sort(function (a, b) {return Math.random() - 0.5;})};

function viewPlayerHand(){
        document.getElementById("playerHandViewer").innerHTML = "";
        for (var i = 0; i < playerhand.length; i++) {
                document.getElementById("playerHandViewer").innerHTML += playerhand[i].img };
}
function CoverDealerPartialHand(){
        document.getElementById("dealerHandViewer").innerHTML = coverCard[0].img;

}
function revealDealerPartialHand(){
        document.getElementById("dealerHandViewer").innerHTML = "";
        document.getElementById("dealerHandViewer").innerHTML = coverCard[0].img;
        for (var i = 1; i < dealerhand.length; i++) {
                document.getElementById("dealerHandViewer").innerHTML += dealerhand[i].img;
        };
}
       
function initDPlayer(){
        var roll = Math.floor(Math.random() * cardDeck.length);
        playerhand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
        cardDeck.splice(roll,1,);
        viewPlayerHand()
}

function initDDealer(){
        var roll = Math.floor(Math.random() * cardDeck.length);
        dealerhand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
        cardDeck.splice(roll,1,);
        CoverDealerPartialHand();
}

function secondCDealer(){
        var roll = Math.floor(Math.random() * cardDeck.length);
        dealerhand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
        cardDeck.splice(roll,1,);
        
}

function initDeal(){
        initDPlayer();
        initDDealer();
        initDPlayer();
        secondCDealer();
        revealDealerPartialHand()
}

////reference
 ///playerHand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck

//[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
        //  cardDeck.splice(roll,1,);
