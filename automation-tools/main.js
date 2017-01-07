var casper = require('casper').create();
// console.log('hello world');
// casper.echo('hello world', 'INFO');
// casper.echo('hello world', 'ERROR');
// //tell terminal to exit
// casper.exit();
casper.start('http://www.google.co.nz/', function(){
  // this.capture('./output/test.png');
  var message = "this current page title is :"
  // var title = this.evaluate(function(message){
  //   var title = document.title;
  //   // return message + title;
  // },message);
  var title = this.getTitle();
  console.log(title);
});
// casper.thenOpen('http://www.bing.com/',function(){
//   this.capture('./output/test_02.png');
// });
casper.run();
