define(function(require){
  var $ = require("jquery"),
      Q = require("q"),
      deck = require("getPlayerDeck2");
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
    var cardsArr2 = data.cards;
    console.log("Cards 2", cardsArr2);
    var counter = 0;
    $(document).on("click", ".draw-button2", function(){
      
      if(counter <= 52){
        $('.card-value2').html(cardsArr2[counter].value);
        $('.player-two').html("<img src=" +cardsArr2[counter].image + ">");
        counter++;
      }
    });
    
  });

});