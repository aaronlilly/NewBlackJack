   $(document).ready(function() {
       $('#dot').click(function() {
           disabl("redeal");
       shuffleMe();
       initDeal();
       $('#startButton').css({'display':'none'});
       $('#options').css({'display':'block'});
       playerScoreShow();
       youShouldntCheat();
      });
  });
