function win(){
    alert("win");
    playerStatus.points += 1;
    enabl("redeal");
    playerPoints();
};

function lose(){
    alert("lose");
    playerStatus.points -= 1;
    enabl("redeal");
    playerPoints();
};