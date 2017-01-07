var casper = require('casper').create();

var urls = ["https://www.google.co.nz","http://www.bing.com/"];
var viewportSizes = [480,720,1200];

// console.log(viewportSizes);

casper.start();
casper.each(urls, function(self, items, index){
  console.log(self,items, index);
  self.thenOpen(items, function() {
    var title = this.getTitle();
    console.log(title);
    this.wait(2000, function(){
      this.capture('./images/screenshot_' + index + '.png');
    });

  });
});


casper.run();
