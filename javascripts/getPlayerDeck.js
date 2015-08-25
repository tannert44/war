define(function(require){
  var $ = require("jquery"),
      Q = require("q");
  
    var deferred = Q.defer();
    $.ajax({
            url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2",
            method: "GET"
          }).done(function(data){
            deferred.resolve(data);
            console.log(data);
          }).fail(function(xhr, status, error) {
            deferred.reject(error);
          }); 

    return deferred.promise;
  
});