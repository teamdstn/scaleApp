/**
 * Copyright (c) 2011 Markus Kohlhase (mail@markus-kohlhase.de)
 */

/**
 * File: scaleApp.i18n.js
 * scaleApp.i18n.js is an extension for scaleApp.
 * 
 * It is licensed under the MIT licence.
 */

scaleApp.i18n = (function( core ){
    
  var lang = "en";
  
  /**
   * Function: getLanguage
   * 
   * Returns:
   * (String) the current language code, that is used globally
   */  
  var getLanguage = function(){
    return lang;
  }
  
  /**
   * Function: getBrowserLanguage
   * 
   * Returns:
   * (String) the language code of the browser
   */  
  var getBrowserLanguage = function(){    
    return navigator.language || navigator.browserLanguage;
  };
  
  
  /**
   * Function: setLanguage
   * 
   * Parameters:    
   * (String) languageCode	- the language code you want to set
   * 
   * Returns:
   * TRUE, if setting to code was successfull else FALSE is returned
   */    
  var setLanguage = function( languageCode ){
    if( typeof languageCode === "string" ){
      lang = languageCode;
      this.publish( "languageChanged", languageCode );      
      return true;
    }    
    return false;
  };
  
  var _ = function( instanceId, textId ){
    var inst = core.getInstance( instanceId );
    core.log.debug(inst)
    if( inst.opt ){
      if( inst.opt.i18n ){
	return inst.opt.i18n[ lang ][ textId ];
      }
    }
    return "";
  };
  
  
  return {
    setLanguage: setLanguage,
    getBrowserLanguage: getBrowserLanguage,
    getLanguage: getLanguage,
    _:_
  };
  
})( scaleApp );