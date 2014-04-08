# Kraken_Example_i18n_Helper

I couldn't find an easy way to render i18n bundle strings dynamically on pages so decided to build my own helper.

Please fork and extend this to include model support or we can just wait for 
dynamic i18n support at Controller and Template level when the smart guys at PayPal finish that.

The end goal is to create a helper in the form:

    {@bundleString key="<key>" bundle="<bundle file>" model="{not:'supported yet'}" /}

Where:
 * **<key>** is the key value in locale file
 * **<bundle file>** is the bundle (i.e. 'index')
 * **<model>** eventually would be able to pass object (this should happen at Controller I think so undecided)

This repository was created specifically to hold the example.  If you look at the 
[commit list](https://github.com/mikesparr/Kraken_Example_i18n_Helper/commits/master), 
you will see how the application was built, step by step.

## Starting point
This application is based on the great example at 
[KrakenJS Example Date Format Helper](https://github.com/lmarkus/Kraken_Example_Date_Format_Helper). 
I used this as a starting point but removed the **Date Format** dependency and logic, then 
had to figure out how to handle asynch dust helper.  After that it was simple.

## Dependencies
You are using [KrakenJS](http://krakenjs.com/) and have an application created.  They can tell you how with great 
[examples](http://krakenjs.com/#examples).

## Usage
1. Copy the `./lib/helper-bundleString.js` to your local `/lib/` or create one.
2. Edit your `index.js` and add `require('./lib/helper-bundleString');`.
3. Edit one of your dust templates `./public/templates/index.js` adding the new helper.

    {@bundleString key="greeting" bundle="index" model="" /}

## And you're done!
This is provided for convenience to give back to others.  I may not have time to address questions, 
typos, etc. so use at your own discretion and risk.

## Notes:
I did not complete the model injection functionality because not required for my use.  I'm still unsure whether 
best to handle that at Controller level, but this served my short term needs.  Feel free to tweak as you need.

**Enjoy!** *and thanks a bunch to the team at PayPal for bringing more structure to the NodeJS world*
