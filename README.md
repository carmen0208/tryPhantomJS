### PhantomJS

PhantomJS is a scriptable, Webkit based "headless" browser

#### Webkie based Browsers:
* Safari
* Google Chrome
* Chromium
* Firefox for IOS

#### Usage
* Navigate the Web
* Capture Resources
* Monitor Network Request

### CasperJS

Allows you to write PhantonJS code that is less error prone.

#### Advantages of Using CasperJS
* Navigation Stack based on Promises
* Convenience Functions
* Cleaner Syntax
* Less Boilerplate
* Testing Suite

### Install PhantomJS and CasperJS

* PhantomJS

   ```sh
npm --version
python --version
mkdir automation-tools
cd automation-tools
npm install phantomjs-prebuilt --save

#usage:
./node_modules/.bin/phantomjs

   ```

* CasperJS

   ```sh
   npm install casperjs --save
   #usage
   ./node_modules/.bin/casperjs

   ```

#### Useful Functions of CasperJS

* getTitle()

  Get the current page title

* getCurrentUrl()

  Gets the Url of the current page

* getHTML()

  Retrives HTML from the current page(Useful for debugging)

  [[learn more at|http://docs.casperjs.org/en/latest/modules/casper.html]]

#### How to check userAgency and how to modify browser's userAgency

```javascript
console.log(window.navigator.userAgent);
```

* Config Chrome's UserAgency
   * use device ToolBar
   * Edit -> add custom device
      * name: casperJS
      * 1000* 2000
      * Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/538.1 (KHTML, like Gecko) CasperJS/1.1.3+PhantomJS/2.1.1 Safari/538.1

## Visual Regression Testing :

#### Concept:
* Capturing Screenshot
* Comparing Images

#### Tools

* [Wraith by BBC ](https://github.com/BBC-News/wraith)
* [PhantomJS ](https://github.com/Huddle/PhantomCSS)
* [Gemini by Yandex](https://github.com/gemini-testing/gemini)
* tools only comparing Images
   * [ImageMagick](https://github.com/rsms/node-imagemagick)
   * [GraphicsMagick](http://aheckmann.github.io/gm/)
   * [Resemble.js](https://huddle.github.io/Resemble.js/)
#### Resources

* https://www.thoughtworks.com/radar/tools/visual-regression-testing-tools
* http://www.kevinlamping.com/hands-on-visual-regression-testing/
* http://abhishek-tiwari.com/post/visual-regression
* http://laurent.bristiel.com/visual-regression-tests/
