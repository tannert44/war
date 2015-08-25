define(function(require){
  var $ = require("jquery"),
      Q = require("q"),
      deck = require("getNewDeck"),
      draw = require("drawCard");
  var playerOneDeck = deck.newDeck();
  var playerTwoDeck = deck.newDeck();
  
  var firstCardDrawn, secondCardDrawn;
  var playerOneId, playerTwoId;
  
  var playerOneScore = 0;
  var playerTwoScore = 0;
  
  playerOneDeck.then(function(data){
    console.log("player one deck data", data);
    playerOneId = data.deck_id;
  });
  
  playerTwoDeck.then(function(data){
    console.log("player two deck data", data);
    playerTwoId = data.deck_id;
  });

  $(document).on("click", ".draw-button", function(){

    draw.drawPlayerOne(playerOneId).then(function(data){
      var deferred = Q.defer();
      
      firstCardDrawn = data;
      console.log("player one drawn data", data);
      $(".player-one").html("<img src=" + data.cards[0].image + ">");
      $(".player-one-value").html(data.cards[0].value);
      
      deferred.resolve();
      return deferred.promise;
    })
    .then(
      function() {
        var deferred = Q.defer();
        
        draw.drawPlayerTwo(playerTwoId).then(function(data){
          secondCardDrawn = data;
          console.log("player two drawn data", data);
          $(".player-two").html("<img src=" + data.cards[0].image + ">");
          $(".player-two-value").html(data.cards[0].value);
          deferred.resolve();
        });
        
        return deferred.promise;
      }
    )
    .then(
      function() {
        // compare the two card values
        console.log(firstCardDrawn, secondCardDrawn);
//        var playerOneValue = parseInt(firstCardDrawn.cards[0].value);
//        var playerTwoValue = paresInt(secondCardDrawn.cards[0].value);
        
        console.log("JEWUSUJSIKS", firstCardDrawn.cards[0].value);
        
        if(playerOneValue > playerTwoValue){
          console.log("Player One WINNSSSSS");
          playerOneScore++;
        }else if(playerOneValue === playerTwoValue){
          console.log("DRAWWWWW");
        }else{
          console.log("Player Two WINNNSSS")
          playerTwoScore++;
        }
        
      }
    );
  })
  

});