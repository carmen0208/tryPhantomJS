var casper = require('casper').create();
// console.log('hello world');
// casper.echo('hello world', 'INFO');
// casper.echo('hello world', 'ERROR');
// //tell terminal to exit
// casper.exit();
casper.start('http://www.google.co.nz/', function(){
  this.capture('./output/test.png');
});
casper.thenOpen('http://www.bing.com/',function(){
  this.capture('./output/test_02.png');
});
casper.run();
