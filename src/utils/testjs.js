

var debug = function(msg) {
	console.log('--testjs--' + msg);
};

//var testjs = (function() {
  var testObj = {
    locatvar : 'default',

    testObj: function() {
      debug('constructor 111');
    },

    setvar: function(value) {
      this.locatvar = value;
    }
  }

  // var testjs = function (){
  //   debug('constructor');
  // };


  // testjs.prototype = {
  //   publicvar : 'public default',

  //   init: function() {
  //     debug('init');
  //     this.privatevar = 'privatevar init';
  //     this.publicvar = 'publicvar init';
  //   },

  //   setvar: function(value) {
  //     debug('setvar');
  //     this.privatevar = 'privatevar value';
  //     this.publicvar = 'publicvar value';
  //   }
  // }

//})();

module.exports = testObj;