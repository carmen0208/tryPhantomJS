var casper = require('./casper_base');
var utils = require('utils');
var brokenResourceExists = false;
var urlState = {};

var urls = [
  'https://carmen0208.github.io/pnf',
  'http://www.google.com',
  'http://www.bing.com'

];
casper.on('resource.received', function(resource){
  // console.log(resource);
  // utils.dump(resource.url);
  if(resource.stage === 'end' && resource.status > 400) {
    utils.dump(resource.url);
    brokenResourceExists = true;
  }
});

casper.start();
casper.each(urls, function(self, url, index){
  self.thenOpen(url, function() {
    urlState[url] = brokenResourceExists;
  });
  self.then(function(){
    brokenResourceExists = false;
  });
});
casper.run(function() {
  utils.dump(urlState);
  this.exit();
});
