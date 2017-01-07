var casper = require('casper').create();
var fs = require('fs');

if(fs.exists('./page_rendering/config.json') && fs.exists('./page_rendering/data.json')) {
  var config = require('./config.json');
  // console.log(config);
  var data = require('./data.json');
  // console.log(data);
} else {
  casper.exit();
}

var urls = data.urls;

var viewportSizes = config.viewportSizes;

// console.log(viewportSizes);

casper.start();

var counter = 0;

casper.repeat(viewportSizes.length, function(){
  var viewportSize = viewportSizes[counter];
  // console.log(viewportSize);
  casper.viewport(viewportSize,1000).each(urls, function(self, items, index){
    console.log(self,items, index);
    self.thenOpen(items, function() {
      var title = this.getTitle();
      console.log(title);
      this.wait(2000, function(){
        this.capture('./images/screenshot_' + index +'_'+ viewportSize + '.png');
      });
    });
  });
  counter += 1;
});



casper.run();
