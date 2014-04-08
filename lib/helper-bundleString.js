/**
 * Created by mikesparr on 4/8/14.
 */

// Load the Makara Library
var i18n = require('makara');
// Load the project's configuration
var nconf = require('nconf');

//We require that dustjs, and the dustjs-helpers have been loaded. The way we invoke this function will ensure that.
(function (dust) {

    //Create a helper called 'bundleString'
    dust.helpers.bundleString = function (chunk, context, bodies, params) {

        //Retrieve the fallback language from the configuration
        var fallbackLang = nconf.get('i18n').fallback || 'en-US';

        //Dig the current language out of the context, or go to the fallback.
        var lang = (context.stack && context.stack.head && context.stack.head.context && context.stack.head.context.locality) || fallbackLang;

        //Create bundle provider
        var provider = i18n.create(nconf.get('i18n'));
        
        //Retrieve the key value from the template parameters.
        var key = dust.helpers.tap(params.key, chunk, context);
        
        //Retrieve the desired bundle 
        var bundle = dust.helpers.tap(params.bundle, chunk, context);

        //Retrieve the model string from the template parameters.
        var model = dust.helpers.tap(params.model, chunk, context);

        return chunk.map(function(chunk) {
            //Parse the bundle using string
            provider.getBundle(bundle, lang, function (err, b) {

                var string = "";
                
                if (!err) {
                    string = b.get(key);
                } else {
                    console.log(err);  // not sure what to do here yet
                }
                
                //TODO: replace variables with model values

                chunk.end(string);
            });
        });

    };

})(typeof exports !== 'undefined' ? module.exports = require('dustjs-helpers') : dust);