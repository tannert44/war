define(function(require){
  var $ = require("jquery"),
      Q = require("q"),
      deck = require("getPlayerDeck");
      console.log(deck);
  deck.then(function(deck){
    var deferred = Q.defer();
    $.ajax({
      url: "http://deckofcardsapi.com/api/deck/" + deck.deck_id + "/draw/?count=52",
      method: "GET"
    }).done(function(data){
      deferred.resolve(data);
    }).fail(function(xhr, status, error) {
    deferred.reject(error);
    }); 

    return deferred.promise;
  }).then(function(data){
    var cardsArr = data.cards;
    console.log("JEWSFORJESUS", cardsArr);
    var counter = 0;
    $(document).on("click", ".draw-button1", function(){
      
      if(counter <= 52){
        $('.card-value1').html(cardsArr[counter].value);
        $('.player-one').html("<img src=" + cardsArr[counter].image + ">");
        counter++;
      }
    });
    
  });

});