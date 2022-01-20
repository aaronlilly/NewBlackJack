var playerStatus = {
tnum: 0,
bnum: 0,
stand: "no",
bust: "no",
points: 0,
reset: function () {
    this.tnum = 0;
    this.bnum = 0;
    this.stand = "no";
    this.bust =  "no";
  }
};

var dealerStatus = {
    tnum: 0,
    bnum: 0,
    stand: "no",
    bust: "no",
    points: 0,
    reset: function () {
        this.tnum = 0;
        this.bnum = 0;
        this.stand = "no";
        this.bust =  "no";
      }
    };

function playerHandEvaluate(){
    for (var i = 0; i < playerhand.length; i++) {
        playerStatus.tnum +=  playerhand[i].eval;
        playerStatus.bnum +=  playerhand[i].altEval;
    }  
};

function playerScoreShow(){
    playerHandEvaluate();
    document.getElementById("pTop").innerHTML = playerStatus.tnum;
    document.getElementById("pBottom").innerHTML = playerStatus.bnum;
};

function youShouldntCheat(){
    for (var i = 0; i < dealerhand.length; i++) {
        dealerStatus.tnum +=  dealerhand[i].eval;
        dealerStatus.bnum +=  dealerhand[i].altEval;
    }  
};


function playerScoreShowOnly(){
    document.getElementById("pTop").innerHTML = playerStatus.tnum;
    document.getElementById("pBottom").innerHTML = playerStatus.bnum;
};