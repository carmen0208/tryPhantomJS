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

