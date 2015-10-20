[![Build Status](https://travis-ci.org/matthewp/one-at-a-time.svg?branch=master)](https://travis-ci.org/matthewp/one-at-a-time)
[![npm version](https://badge.fury.io/js/promise-one-at-a-time.svg)](http://badge.fury.io/js/promise-one-at-a-time)

# promise-one-at-a-time

Run promise-creating functions one at a time.

## Install

```shell
npm install promise-one-at-a-time --save
```

## Use

Pass in an array of functions that return promises. They will be ran one at a time and the last value will be returned.

```js
var oneAtATime = require("promise-one-at-a-time");

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
  // val === "works"
});
```

## License

BSD 2 Clause
