var casper = require('casper').create();
// console.log('hello world');
// casper.echo('hello world', 'INFO');
casper.echo('hello world', 'ERROR');
//tell terminal to exit
casper.exit();
