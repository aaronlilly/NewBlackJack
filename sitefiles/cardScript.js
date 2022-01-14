let playerhand = [];
let dealerhand = [];
 
function shuffleMe(){cardDeck.sort(function (a, b) {return Math.random() - 0.5;})};
function viewPlayerHand(){document.getElementById('playerHandViewer').innerHTML = "this"  };


function pushOne(){
shuffleMe();



var roll = Math.floor(Math.random() * cardDeck.length) + 1;

playerhand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})


cardDeck.splice(roll,1,);

console.log(playerhand);
console.log(cardDeck);
}


////reference
 ///playerHand.push({"card":cardDeck[roll].card,"suit":cardDeck[roll].suit,"color":cardDeck

//[roll].color,"eval":cardDeck[roll].eval,"altEval":cardDeck[roll].altEval,"img":cardDeck[roll].img})
        //  cardDeck.splice(roll,1,);
