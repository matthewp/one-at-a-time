var test = require("tape");
var oneAtATime = require("../one");
var Promise = global.Promise || optional('es6-promise').Promise;

test("returns the last value in the chain", function(t){
  t.plan(1);

  var fns = [
    function(){
      return new Promise(function(resolve){
        resolve();
      });
    },
    function(){
      return new Promise(function(resolve){
        resolve("works");
      });
    }
  ];

  oneAtATime(fns).then(function(val){
    t.equal(val, "works");
  });

});

test("an error is returned when a function fails", function(t){
  t.plan(1);

  var fns = [
    function(){
      return new Promise(function(resolve){
        resolve();
      });
    },
    function(){
      return new Promise(function(resolve, reject){
        reject(new Error("Oh no"));
      });
    },
    function(){
      return new Promise(function(resolve){
        resolve();
      });
    }
  ];

  oneAtATime(fns).then(
    function(){
      console.log("OH NO");
    },
    function(err){
      t.equal(err.message, "Oh no");
    }
  );
});
