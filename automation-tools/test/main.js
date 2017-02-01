var url = 'https://duckduckgo.com/';

function checkSelectorForAttr(selector, attr) {
  var results = [];
  var elements = document.querySelectorAll(selector);
  if(elements.length == 0) {
    return null;
  }
  for (var i=0;i<elements.length;i++) {
    var current = elements[i];
    var hasAttr = current.hasAttribute(attr);
    if(!hasAttr) {
      results.push(current.outerHTML);
    }
  }
  return results;
}

casper.options.remoteScripts.push('https://code.jquery.com/jquery-2.2.3.min.js');

casper.test.begin('Testing the status', function(test) {
  casper.start(url,function(){
    // test.assertHttpStatus(200,'Page is up and running');
    this.evaluate(function(){
      $.noConflict();
    });
  });
  casper.then(function(){
    // test.assert(casper.getCurrentUrl() === url, 'URL is the one expected');
    test.assertExists('html[lang]', 'A html element with a "lang" attribute exists');
    test.assertTruthy(this.getElementAttribute('html[lang]', 'lang'),'html lang attribute has a value');
  });

  casper.then(function() {
    test.assertExists('head title', 'A title element exists inside the head');
  });

  casper.then(function() {
    var imageWithNoAltAttr = this.evaluate(checkSelectorForAttr, 'img','alt');
    if(imageWithNoAltAttr && imageWithNoAltAttr.length > 0) {
      test.fail('Some image don\'t have an "alt" attribute');
    }
  });

  casper.run(function(){
    test.done();
  });
})
// casper.exit();
