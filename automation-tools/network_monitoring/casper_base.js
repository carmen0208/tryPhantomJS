var require = patchRequire(require);
var casper = require('casper').create();

casper.on('remote.message', function(msg){
  console.log('message is'+msg);
})

module.exports = casper;
