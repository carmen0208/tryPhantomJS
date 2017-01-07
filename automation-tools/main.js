var casper = require('casper').create();
// console.log('hello world');
// casper.echo('hello world', 'INFO');
// casper.echo('hello world', 'ERROR');
// //tell terminal to exit
// casper.exit();
casper.on('remote.message', function(msg){
  console.log('remote message is :' + msg);
});

casper.start('http://www.google.co.nz/', function(){
  // // this.capture('./output/test.png');
  // var message = "this current page title is :"
  // // var title = this.evaluate(function(message){
  // //   var title = document.title;
  // //   // return message + title;
  // // },message);
  // var title = this.getTitle();
  // console.log(title);

  this.fill('form', {q: 'hello world!'}, true);
});
casper.wait(1000,function(){
  // this.capture('./output/test.png');
  var data = this.evaluate(function() {
    // var targetEl = document.querySelectorAll('.g > .rc > h3');
    // console.log(targetEl, targeEl.length);
    // console.log(window.navigator.userAgent);
    var targetElements = document.querySelectorAll('.g > h3 > a');
    // console.log(targetElements, targetElements.length);
    var data = [];
    for (var index = 0; index < targetElements.length; index++) {
      var currentEl = targetElements[index];

      var currentLink = currentEl.getAttribute('href');
      var currentTitle = currentEl.text;
      var currentItem = {
        'link': currentLink,
        'title': currentTitle
      };

      data.push(currentItem);
    }

    return data;
  });
    // console.log('ok');
  console.log(JSON.stringify(data));
});
casper.run();
