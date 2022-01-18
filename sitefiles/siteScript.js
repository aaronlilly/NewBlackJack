   $(document).ready(function() {
       $('#dot').click(function() {
       shuffleMe();
       initDeal();
       $('#startButton').css({'display':'none'});
       $('#options').css({'display':'block'});
       playerScoreShow();
       youShouldntCheat();
      });
  });
