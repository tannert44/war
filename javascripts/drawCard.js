define(function(require){
  var $ = require("jquery"),
      Q = require("q"),
      deck = require("getNewDeck");
  return{
    drawPlayerOne: function(deckId){
     
           var deferred = Q.defer();
         $.ajax({
            url: "http://deckofcardsapi.com/api/deck/" +deckId+ "/draw/?count=1",
            method: "GET"
          }).done(function(data){
           if(data.cards[0].value === "ACE"){
              data.cards[0].value = "14";
           }else if(data.cards[0].value === "KING"){
              data.cards[0].value = "13";
           }else if(data.cards[0].value === "QUEEN"){
              data.cards[0].value = "12";
           }else if(data.cards[0].value === "JACK"){
              data.cards[0].value = "11";
           }
            deferred.resolve(data);
          }).fail(function(xhr, status, error) {
            deferred.reject(error);
          }); 

        return deferred.promise;
    },
    
    drawPlayerTwo: function(deckId){
     
           var deferred = Q.defer();
         $.ajax({
            url: "http://deckofcardsapi.com/api/deck/" +deckId+ "/draw/?count=1",
            method: "GET"
          }).done(function(data){
           if(data.cards[0].value === "ACE"){
              data.cards[0].value = "14";
           }else if(data.cards[0].value === "KING"){
              data.cards[0].value = "13";
           }else if(data.cards[0].value === "QUEEN"){
              data.cards[0].value = "12";
           }else if(data.cards[0].value === "JACK"){
              data.cards[0].value = "11";
           }
            deferred.resolve(data);
          }).fail(function(xhr, status, error) {
            deferred.reject(error);
          }); 

        return deferred.promise;
    }

    };
    
  
});