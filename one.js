module.exports = oneAtATime;

var slice = Array.prototype.slice;
var shift = Array.prototype.shift;

// Run promise creating functions one at a time.
function oneAtATime(fns){
  fns = slice.call(fns);
  var fn = shift.call(fns);
  if(!fn) {
    return;
  }
  return fn().then(function(val){
    return fns.length
      ? oneAtATime(fns)
      : val;
  });
}
